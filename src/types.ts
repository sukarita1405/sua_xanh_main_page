export interface MenuItem {
  id: string;
  name: string;
  type: 'milk' | 'carb';
  description: string;
  image: string;
  price: number; // in VND
  calories: number; // kcal
  protein: number; // g
  fiber: number; // g
  fat: number; // g
  benefits: string[];
  tags: string[];
  isHot?: boolean;
  usage?: string;
  caution?: string;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  milkId: string;
  carbId: string;
  price: number;
  originalPrice: number;
  calories: number;
  protein: number;
  fiber: number;
  tags: string[];
  image: string;
}

export interface StallLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  openingHours: string;
  region: string; // e.g., "Quận 1", "Quận Bình Thạnh", "Quận 3"
  status: 'open' | 'busy' | 'closed';
  googleMapsMock?: string; // a custom coordinate label or descriptive location
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
