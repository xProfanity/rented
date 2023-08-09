interface slug {
  current: string;
}

export interface image {
  asset: {
    _ref: string;
    _type: string;
  },
  _type: string;
}

export interface Property {
  propertyId: string;
  title: string;
  slug: slug;
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
  thumbnail: image;
  ameneties: string[];
  images: image[];
  promotion: boolean;
  discountPercentage: number;
  promotionDescription: string;
  available: boolean;
  contact: string[];
}

export interface Featured {
  featured: Property[]
}

export interface User {
  username: string;
  userId: string;
  image: string;
  email: string;
  bookmarks: string[];
  _id: string;
}