export interface IProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  addToCart?: () => void;
  buy?: () => void;
}
