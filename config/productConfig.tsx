export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  category?: Category;
  detail?: string;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  products?: Product[];
}
