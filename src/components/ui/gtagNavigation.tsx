import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function useGtagNavigate() {
  const router = useRouter();

  const navigateWithEvent = React.useCallback(
    (
      url: string,
      options?: {
        eventName?: string;
        eventParams?: Record<string, any>;
        timeoutMs?: number;
      }
    ) => {
      const eventName =
        options?.eventName ?? "conversion_event_submit_lead_form";
      const eventParams = options?.eventParams ?? {};
      const timeoutMs = options?.timeoutMs ?? 2000;

      const isExternal = (() => {
        try {
          const target = new URL(url, window.location.href);
          return target.origin !== window.location.origin;
        } catch {
          return false;
        }
      })();

      const performNavigation = () => {
        if (isExternal) {
          window.location.href = url;
        } else {
          router.push(url);
        }
      };

      if (
        typeof window === "undefined" ||
        typeof (window as any).gtag !== "function"
      ) {
        performNavigation();
        return;
      }

      let didNavigate = false;
      const timer = window.setTimeout(() => {
        if (!didNavigate) {
          didNavigate = true;
          performNavigation();
        }
      }, timeoutMs);

      (window as any).gtag("event", eventName, {
        ...eventParams,
        event_callback: () => {
          if (!didNavigate) {
            didNavigate = true;
            window.clearTimeout(timer);
            performNavigation();
          }
        },
        event_timeout: timeoutMs,
      });
    },
    [router]
  );

  return navigateWithEvent;
}

export function GtagLink(
  props: React.PropsWithChildren<
    Omit<React.ComponentProps<typeof Link>, "onClick"> & {
      eventName?: string;
      eventParams?: Record<string, any>;
      timeoutMs?: number;
    }
  >
) {
  const { href, children, eventName, eventParams, timeoutMs, ...rest } =
    props as any;

  const gnav = useGtagNavigate();

  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        const url = typeof href === "string" ? href : href?.toString() ?? "";
        gnav(url, { eventName, eventParams, timeoutMs });
      }}
    >
      {children}
    </Link>
  );
}

export function GtagButton({
  to,
  children,
  eventName,
  eventParams,
  timeoutMs,
  ...rest
}: React.PropsWithChildren<
  {
    to: string;
    eventName?: string;
    eventParams?: Record<string, any>;
    timeoutMs?: number;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
  const gnav = useGtagNavigate();
  return (
    <button
      {...rest}
      onClick={(e) => {
        rest.onClick?.(e);
        if (e.defaultPrevented) return;
        gnav(to, { eventName, eventParams, timeoutMs });
      }}
    >
      {children}
    </button>
  );
}
