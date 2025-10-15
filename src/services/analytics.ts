interface BaseGtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface GtagEvent extends BaseGtagEvent {
  error_message?: string;
  target_url?: string;
  previous_url?: string;
  form_name?: string;
  form_step?: string;
  cta_text?: string;
  cta_location?: string;
}

import { GA_CONFIG } from '@/config/analytics';

declare global {
  interface Window {
    gtag(
      command: "event" | "config" | "set" | "js",
      targetId: string | Date,
      params?: Record<string, unknown>
    ): void;
    dataLayer: unknown[];
  }
}

type PageViewParams = {
  page_path: string;
  page_title?: string;
  page_location?: string;
  send_page_view?: boolean;
};

export const pageview = (url: string, additionalParams: Partial<PageViewParams> = {}): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_CONFIG.id, {
    page_path: url,
    ...GA_CONFIG.options,
    ...additionalParams,
  } as PageViewParams);
};

export const sendEvent = ({ action, category, label, value, ...rest }: GtagEvent) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    send_to: GA_CONFIG.id,
    ...rest,
  });
};

export const commonEvents = {
  newsletter: {
    subscribe: (source: string): void => sendEvent({
      action: 'subscribe',
      category: 'newsletter',
      label: source,
    }),
    success: (source: string): void => sendEvent({
      action: 'subscription_success',
      category: 'newsletter',
      label: source,
    }),
    error: (source: string, error: string): void => sendEvent({
      action: 'subscription_error',
      category: 'newsletter',
      label: source,
      error_message: error,
    }),
  },
  
  navigation: {
    click: (target: string, targetUrl?: string): void => sendEvent({
      action: 'click',
      category: 'navigation',
      label: target,
      target_url: targetUrl,
    }),
    scroll: (percentage: number): void => sendEvent({
      action: 'scroll',
      category: 'navigation',
      value: percentage,
    }),
  },

  form: {
    start: (formName: string, formStep?: string): void => sendEvent({
      action: 'form_start',
      category: 'form',
      label: formName,
      form_name: formName,
      form_step: formStep,
    }),
    complete: (formName: string): void => sendEvent({
      action: 'form_complete',
      category: 'form',
      label: formName,
      form_name: formName,
    }),
    error: (formName: string, error: string): void => sendEvent({
      action: 'form_error',
      category: 'form',
      label: formName,
      form_name: formName,
      error_message: error,
    }),
  },

  cta: {
    click: (buttonId: string, location?: string): void => sendEvent({
      action: 'click',
      category: 'cta',
      label: buttonId,
      cta_text: buttonId,
      cta_location: location,
    }),
  },
};