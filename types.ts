
export type Category = 'Indoor' | 'Outdoor' | 'Bouquets' | 'Succulents' | 'Gifts' | 'All';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  careLevel: 'Easy' | 'Intermediate' | 'Advanced';
  sunlight: 'Low' | 'Moderate' | 'Full Sun';
  water: 'Weekly' | 'Bi-weekly' | 'Daily';
  rating: number;
  reviews: number;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
