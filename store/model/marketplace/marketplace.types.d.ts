import { Action } from "easy-peasy";
import { StaticImageData } from "next/image";

export interface IMarketplaceModel {
  cart: IProductsModel[];
  products: IProductsModel[];
  totalPrice: number;

  addToCart: Action<IMarketplaceModel, IProductsModel>;
  setTotalPrice: Action<IMarketplaceModel, IProductsModel>;
  setImage: Action<IProductsModel, StaticImageData>;
  setName: Action<IProductsModel, string>;
  setDescription: Action<IProductsModel, string>;
  setPrice: Action<IProductsModel, number>;
  setQuantity: Action<IProductsModel, number>;
}

export interface IProductsModel {
  image: StaticImageData;
  name: string;
  description: string;
  price: number;
  quantity: number;
}
