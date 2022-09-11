import { Action } from "easy-peasy";

export interface IUserModel {
  fullName: string;
  email: string;

  //actions
  setFullName: Action<IUserModel, string>;
  setEmail: Action<IUserModel, string>;
}
