"use client";

import { useCallback } from "react";
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, unknown>;

export function useGtagEvent() {
  return useCallback((eventName: string, params?: EventParams) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params ?? {});
    }
  }, []);
}
