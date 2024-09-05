export interface ProductType {
  id: string; //firebase use a string
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  stock: number;
  quantity?: number;
}
