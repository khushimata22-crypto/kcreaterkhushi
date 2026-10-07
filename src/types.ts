export interface InquiryFormData {
  fullName: string;
  whatsappNumber: string;
  service: string;
  projectRequirement: string;
}

export type ServiceType =
  | 'Advertisement'
  | 'Landing Page'
  | 'Website'
  | 'Advertisement + Landing Page'
  | 'Advertisement + Website'
  | 'Landing Page + Website'
  | 'Other';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  gradient: string;
  accentBorder: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Advertisement' | 'Landing Pages' | 'Websites' | 'Creative Designs';
  description: string;
  image: string;
  badge: string;
  isOriginalAsset?: boolean;
}
