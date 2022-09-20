import { action } from "easy-peasy";
import { IMarketplaceModel } from "./marketplace.types";
import soda from "./soda.jpg";
export const MarketplaceModel: IMarketplaceModel = {
  cart: [],
  totalPrice: 0,
  products: [
    {
      image: soda,
      name: "Soda",
      description: "La soda mas rica del mundo",
      price: 2,
      quantity: 10,
    },
    {
      image: soda,
      name: "Soda 2",
      description: "La soda 2 mas rica del mundo",
      price: 3,
      quantity: 8,
    },
    {
      image: soda,
      name: "Soda 3",
      description: "La soda 3 mas rica del mundo",
      price: 10,
      quantity: 20,
    },
  ],

  setImage: action((state, payload) => {
    state.image = payload;
  }),
  setName: action((state, payload) => {
    state.name = payload;
  }),
  setDescription: action((state, payload) => {
    state.description = payload;
  }),
  setPrice: action((state, payload) => {
    state.price = payload;
  }),
  setQuantity: action((state, payload) => {
    state.quantity = payload;
  }),
};
