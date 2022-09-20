import { MarketplaceModel } from "./marketplace";
import { IStoreModel } from "./model.types";
import { UserModel } from "./user";

export const model: IStoreModel = {
  user: UserModel,
  marketplace: MarketplaceModel,
};
