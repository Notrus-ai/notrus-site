import { NextResponse } from "next/server";

type MailerLiteStatus = 'active' | 'unsubscribed' | 'unconfirmed' | 'bounced' | 'junk';

interface MailerLiteSubscriber {
  email: string;
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
      { error: "Newsletter service is not configured properly. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const { email, language } = (await request.json()) as {
      email?: string;
      language?: "pt" | "en";
    };

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    let groupId: string | undefined;
    if (language === "pt" && process.env.MAILERLITE_GROUP_PT) {
      groupId = process.env.MAILERLITE_GROUP_PT;
    } else if (language === "en" && process.env.MAILERLITE_GROUP_EN) {
      groupId = process.env.MAILERLITE_GROUP_EN;
    } else if (process.env.MAILERLITE_GROUP_DEFAULT) {
      groupId = process.env.MAILERLITE_GROUP_DEFAULT;
    }

    const subscriber: MailerLiteSubscriber = {
      email,
      status: "active",
      ...(groupId ? { groups: [groupId] } : {}),
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

      // Já inscrito
      if (response.status === 409 || errorData.message?.toLowerCase().includes("already exists")) {
        return NextResponse.json(
          {
            message:
              language === "pt"
                ? "Você já está inscrito!"
                : "You're already subscribed!",
          },
          { status: 200 }
        );
      }

      // Erro de validação
      if (response.status === 422) {
        return NextResponse.json(
          {
            error:
              language === "pt"
                ? "Email inválido ou já cadastrado"
                : "Invalid or already registered email",
          },
          { status: 422 }
        );
      }

      throw new Error(errorData.message || "Failed to subscribe to newsletter");
    }

    return NextResponse.json(
      {
        message:
          language === "pt"
            ? "Inscrição realizada com sucesso!"
            : "Subscription successful!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}