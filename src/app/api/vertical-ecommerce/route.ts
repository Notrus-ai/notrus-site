import { NextResponse } from "next/server";

type MailerLiteStatus = 'active' | 'unsubscribed' | 'unconfirmed' | 'bounced' | 'junk';

interface MailerLiteSubscriber {
  email: string;
  fields?: {
    locale?: string;
    source?: string;
  };
  groups?: string[];
  status?: MailerLiteStatus;
}

interface MailerLiteErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export async function POST(request: Request) {
  if (!process.env.MAILERLITE_API_KEY) {
    console.error("Missing environment variable: MAILERLITE_API_KEY");
    return NextResponse.json(
      { error: "Service is not configured properly. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const { email, locale } = (await request.json()) as {
      email?: string;
      locale?: "pt" | "en";
    };

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Seleciona o grupo VERTICAL com base no locale
    let groupId: string | undefined;
    if (locale === "pt" && process.env.MAILERLITE_GROUP_VERTICAL_PT) {
      groupId = process.env.MAILERLITE_GROUP_VERTICAL_PT;
    } else if (locale === "en" && process.env.MAILERLITE_GROUP_VERTICAL_EN) {
      groupId = process.env.MAILERLITE_GROUP_VERTICAL_EN;
    }

    if (!groupId) {
      console.error("Missing vertical group configuration for locale:", locale);
      return NextResponse.json(
        { error: "Group configuration missing" },
        { status: 500 }
      );
    }

    const subscriber: MailerLiteSubscriber = {
      email,
      status: "active",
      fields: {
        locale: locale || "pt",
        source: "vertical-ecommerce-floating",
      },
      groups: [groupId],
    };

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(subscriber),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as MailerLiteErrorResponse;

      // Já inscrito - atualiza os dados e adiciona ao grupo
      if (response.status === 409 || errorData.message?.toLowerCase().includes("already exists")) {
        // Tenta atualizar o subscriber existente
        const updateResponse = await fetch(
          `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
              fields: subscriber.fields,
              groups: [groupId],
            }),
          }
        );

        if (updateResponse.ok) {
          return NextResponse.json(
            {
              message:
                locale === "pt"
                  ? "Email registrado com sucesso!"
                  : "Email registered successfully!",
            },
            { status: 200 }
          );
        }

        // Se falhar a atualização, retorna sucesso mesmo assim
        return NextResponse.json(
          {
            message:
              locale === "pt"
                ? "Email registrado com sucesso!"
                : "Email registered successfully!",
          },
          { status: 200 }
        );
      }

      // Erro de validação
      if (response.status === 422) {
        return NextResponse.json(
          {
            error:
              locale === "pt"
                ? "Email inválido"
                : "Invalid email",
          },
          { status: 422 }
        );
      }

      throw new Error(errorData.message || "Failed to save email");
    }

    return NextResponse.json(
      {
        message:
          locale === "pt"
            ? "Email registrado com sucesso!"
            : "Email registered successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email save error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Failed to save email. Please try again later." },
      { status: 500 }
    );
  }
}