interface Cate {
  name: string;
  slug: string;
}

export interface Post {
  category?: Cate[];
  date?: string;
  title: string;
  slug?: string;
  content: string;
  srcImg: string;
  altImg: string;
}
