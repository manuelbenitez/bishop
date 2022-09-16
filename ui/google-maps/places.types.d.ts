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

export interface IPlacesAutocompleteProps {
  setSelected: (lat: number, lng: number) => void;
  setCenter: ({ lat: number, lng: number }) => void;
  setInputAddress: (address: string) => void;
  setResults: (results: results) => void;
  handleEdit: () => void;
  customAddress: string;
}
