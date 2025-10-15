export const GA_TRACKING_ID = 'G-FMYBGJ967S';

export const GA_CONFIG = {
  id: GA_TRACKING_ID,
  options: {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    send_page_view: true
  }
} as const;