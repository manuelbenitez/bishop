export interface IProductCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  price: number;
  addToCart?: () => void;
  buy?: () => void;
}
