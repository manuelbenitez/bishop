import { IMarketplaceModel } from "./marketplace/marketplace.types";
import { IUserModel } from "./user/user.types";


export interface IStoreModel {
  user: IUserModel;
  marketplace: IMarketplaceModel
}
