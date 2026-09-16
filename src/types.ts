export type ProductCategory = 'pickles' | 'powders';

export interface Product {
  id: string;
  name: string;
  teluguName?: string;
  category: ProductCategory;
  subCategory?: string;
  traditionalPreparation: string;
  description: string;
  image: string;
  ingredients: string[];
  storageInstructions: string;
  isEkadasiSpecial?: boolean;
  badge?: string;
}

export interface BusinessInfo {
  name: string;
  subtitle: string;
  tagline: string;
  supportingText: string;
  phone: string;
  whatsappNumber: string;
  fssaiLicense: string;
  suitableForText: string;
  googleMapsQuery: string;
  googleMapsDirectionsUrl: string;
}
