interface Slug {
  current: string;
}

export interface Property {
    propertyId: string;
  title: string;
  slug: Slug;
  description: string;
  price: number;
  currency: string;
  location: string;
  purpose: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  thumbnail: string;
  ameneties: string[];
  images: string[];
  promotion: boolean;
  discountPercentage: number;
  promotionDescription: string;
  available: boolean;
  contact: string[];
}

export interface Featured {
  featured: Property[]
}