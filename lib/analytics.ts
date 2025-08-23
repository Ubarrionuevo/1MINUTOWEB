// Google Analytics helper functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventName,
      ...parameters,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-E71CRFH501', {
      page_path: url,
      page_title: title,
    });
  }
};

// Track conversions
export const trackConversion = (action: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'conversion',
      event_label: action,
      value: value,
    });
  }
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: location,
  });
};

// Track demo clicks
export const trackDemoClick = () => {
  trackEvent('demo_click', {
    event_category: 'engagement',
    event_label: 'demo_view',
  });
};

// Track referral clicks
export const trackReferralClick = () => {
  trackEvent('referral_click', {
    event_category: 'referral',
    event_label: 'referral_interest',
  });
};
