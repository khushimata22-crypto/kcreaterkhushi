/**
 * WhatsApp Integration Utilities for K Creator
 * Owner: Khushi Mata
 * WhatsApp: +91 9673832077
 */

export const WHATSAPP_PHONE_RAW = '+91 9673832077';
export const WHATSAPP_PHONE_CLEAN = '919673832077';

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_PHONE_CLEAN}?text=${encodeURIComponent(message.trim())}`;
};

export const openWhatsApp = (message: string): void => {
  const url = buildWhatsAppUrl(message);
  // Using an anchor tag click ensures reliable behavior across mobile & desktop browsers
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const defaultMessages = {
  header: 'Hello Khushi Mata, I would like to inquire about K Creator services.',
  heroWhatsApp: 'Hello Khushi Mata, I would like to inquire about your design services for my business.',
  startProject: 'Hello Khushi Mata, I am ready to start my project with K Creator.',
  serviceInquiry: (serviceName: string) =>
    `Hello Khushi Mata, I would like to enquire about your ${serviceName} service. Please share details and pricing.`,
  chatCta: "Hello Khushi Mata, I have a project in mind and would love to discuss ideas with K Creator.",
  contactDirect: 'Hello Khushi Mata, I would like to discuss working together with K Creator.',
};
