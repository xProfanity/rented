export interface Property {
    propertyId: string;
  title: string;
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
  amenities: string[];
  images: string[];
  available: boolean;
  contact: string[];
}

export interface Featured {
  featured: Property[]
}