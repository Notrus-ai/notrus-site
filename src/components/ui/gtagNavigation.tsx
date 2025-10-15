"use client";

import { useCallback } from "react";
import { GA_CONFIG } from "@/config/analytics";

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

type GtagFunction = (
  command: "event" | "config" | "set" | "js",
  targetId: string | Date,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag: GtagFunction;
  }
}

const isGtagDefined = () => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

export function useGtagEvent() {
  return useCallback((eventName: string, eventParams?: Partial<GtagEvent>) => {
    if (!isGtagDefined()) return;

    const gtag = window.gtag as GtagFunction;
    gtag("event", eventName, {
      ...eventParams,
      send_to: GA_CONFIG.id,
    });
  }, []);
}

export function useGtagPageview() {
  return useCallback((url: string) => {
    if (!isGtagDefined()) return;

    const gtag = window.gtag as GtagFunction;
    gtag("config", GA_CONFIG.id, {
      page_path: url,
      ...GA_CONFIG.options,
    });
  }, []);
}
