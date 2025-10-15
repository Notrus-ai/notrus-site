type BaseGtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

type NewsletterEvent = BaseGtagEvent & {
  error_message?: string;
};

type NavigationEvent = BaseGtagEvent & {
  target_url?: string;
  previous_url?: string;
};

type FormEvent = BaseGtagEvent & {
  error_message?: string;
  form_name: string;
  form_step?: string;
};

type CtaEvent = BaseGtagEvent & {
  cta_text?: string;
  cta_location?: string;
};

export type GtagEvent = BaseGtagEvent & Partial<{
  error_message: string;
  target_url: string;
  previous_url: string;
  form_name: string;
  form_step: string;
  cta_text: string;
  cta_location: string;
}>;

export const GA_TRACKING_ID = 'G-FMYBGJ967S';

type PageViewParams = {
  page_path: string;
  page_title?: string;
  page_location?: string;
  send_page_view?: boolean;
};

export const pageview = (url: string, additionalParams: Partial<PageViewParams> = {}): void => {
  window.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
    ...additionalParams,
  } as PageViewParams);
};

export const event = ({ action, category, label, value, ...rest }: GtagEvent) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...rest,
  });
};

export const commonEvents = {
  newsletter: {
    subscribe: (source: string): void => event({
      action: 'subscribe',
      category: 'newsletter',
      label: source,
    } as const),
    success: (source: string): void => event({
      action: 'subscription_success',
      category: 'newsletter',
      label: source,
    } as const),
    error: (source: string, error: string): void => event({
      action: 'subscription_error',
      category: 'newsletter',
      label: source,
      error_message: error,
    } as const),
  },
  
  navigation: {
    click: (target: string, targetUrl?: string): void => event({
      action: 'click',
      category: 'navigation',
      label: target,
      target_url: targetUrl,
    } as const),
    scroll: (percentage: number): void => event({
      action: 'scroll',
      category: 'navigation',
      value: percentage,
    } as const),
  },

  form: {
    start: (formName: string, formStep?: string): void => event({
      action: 'form_start',
      category: 'form',
      label: formName,
      form_name: formName,
      form_step: formStep,
    } as const),
    complete: (formName: string): void => event({
      action: 'form_complete',
      category: 'form',
      label: formName,
      form_name: formName,
    } as const),
    error: (formName: string, error: string): void => event({
      action: 'form_error',
      category: 'form',
      label: formName,
      form_name: formName,
      error_message: error,
    } as const),
  },

  cta: {
    click: (buttonId: string, location?: string): void => event({
      action: 'click',
      category: 'cta',
      label: buttonId,
      cta_text: buttonId,
      cta_location: location,
    } as const),
  },
} as const;