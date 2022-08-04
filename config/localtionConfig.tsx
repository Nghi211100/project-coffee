export interface Address {
  addr: string;
  phone: string;
  src: string;
  slug: string;
  srcImg: string;
  altImg: string;
  openAt: string;
  content: string;
  category: Category;
}

export interface Location {
  title: string;
  slug: string;
  detail: Address[];
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  address: Location[];
}
