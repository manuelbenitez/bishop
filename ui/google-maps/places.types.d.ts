export interface IPlacesProps {
  labels?: IPlacesLabels;
}

export interface IPlacesLabels {
  venueName: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  po: string;
  state: string;
  country: string;
  saveLocation: string;
  customAddress: string;
  error: string;
}
