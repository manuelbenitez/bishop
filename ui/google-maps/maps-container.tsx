import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useEffect, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import styles from "./maps-container.module.scss";
import Button from "../button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GOOGLE_API_KEY } from "./api-key.constant";
import { BiPencil } from "react-icons/bi";
import { IPlacesAutocompleteProps, IPlacesProps } from "./places.types";
import { SubTextOne } from "../typography/common";
import Input from "../input";
import { Icon } from "../icon";
import { wildBlueYonder } from "../typography/common/colors";
export default function Places({ labels }: IPlacesProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${GOOGLE_API_KEY}&libraries=places&callback=initMap`,
  });
  if (!isLoaded) return <></>;
  return <Map labels={labels} />;
}
function Map({ labels }: IPlacesProps) {
  const [center, setCenter] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral
  >({ lat: 0, lng: 0 });
  const [selected, setSelected] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral
  >({ lat: 0, lng: 0 });
  const [inputAddress, setInputAddress] = useState<string>("");
  const [results, setResults] = useState<google.maps.GeocoderResult[]>();
  const [addressOne, setAddressOne] = useState<string>("");
  const [addressTwo, setAddressTwo] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [edit, setEdit] = useState(false);
  const [customAddress, setCustomAddress] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (results) {
      const { address_components } = results[0];
      console.log(results);
      if (address_components) {
        address_components.forEach((component) => {
          switch (component.types[0]) {
            case "route":
              setAddressOne(component.long_name);
              break;
            case "neighborhood":
              setAddressTwo(component.long_name);
              break;
            case "postal_town":
              setCity(component.long_name);
              break;
            case "country":
              setCountry(component.long_name);
              break;
            case "administrative_area_level_1":
              setState(component.long_name);
              break;
            case "postal_code":
              setPostcode(component.long_name);
              break;
          }
        });
      }
    }
  }, [results]);
  function handleEdit() {
    setEdit(true);
    setCustomAddress(true);
  }

  function handleSelected(lat: number, lng: number) {
    setSelected({ lat, lng });
    setCustomAddress(false);
  }
  return (
    <>
      <div>
        <PlacesAutoComplete
          setSelected={handleSelected}
          setCenter={setCenter}
          setInputAddress={setInputAddress}
          setResults={setResults}
          handleEdit={handleEdit}
          customAddress={"Custom Address"}
        />
      </div>
      {selected && (
        <div>
          {!customAddress && (
            <div className={styles["map-container"]}>
              <GoogleMap
                zoom={13}
                center={center}
                mapContainerClassName={styles["map-container__google-map"]}
              >
                <Marker position={center} />
              </GoogleMap>
            </div>
          )}

          {edit ? (
            <div className={styles["map-container__edit-address"]}>
              <Input
                placeholder={inputAddress}
                label={"Venue Name"}
                value={inputAddress}
                onChange={() => console.log("input address")}
              />
              {error && (
                <div style={{ marginLeft: "10px" }}>
                  <SubTextOne label={error} color={wildBlueYonder} />
                </div>
              )}
              <div className={styles["map-container__edit-address__rows"]}>
                <div
                  className={
                    styles["map-container__edit-address__rows__column-left"]
                  }
                >
                  <Input
                    value={addressOne}
                    label={"Address One"}
                    onChange={setAddressOne}
                    placeholder={"Address One"}
                  />
                  <Input
                    value={city}
                    label={"City"}
                    onChange={setCity}
                    placeholder={"City"}
                  />
                  <Input
                    value={postcode}
                    label={"Post Code"}
                    onChange={setPostcode}
                    placeholder={"Postcode"}
                  />
                </div>
                <div
                  className={
                    styles["map-container__edit-address__rows__column-right"]
                  }
                >
                  <Input
                    value={addressTwo}
                    label={"Address two"}
                    onChange={setAddressTwo}
                    placeholder={"Adress Two"}
                  />
                  <Input
                    value={state}
                    label={"State"}
                    onChange={setState}
                    placeholder={"State"}
                  />
                  <Input
                    value={country}
                    label={"Country"}
                    onChange={setCountry}
                    placeholder={"Country"}
                  />
                </div>
              </div>
              <div className={styles["map-container__edit-address__button"]}>
                <Button label={"Submit"} type={"primary"} />
              </div>
            </div>
          ) : (
            <div className={styles["map-container__input-container"]}>
              <Input
                label={"Venue Name"}
                placeholder={"Add Venue Name"}
                className={styles["map-container__input-container__edit-input"]}
                value={""}
                onChange={() => console.log("venue name")}
              />
              <Icon
                onClick={() => setEdit(true)}
                icon={
                  <BiPencil color={wildBlueYonder} style={{ padding: "0px" }} />
                }
                className={
                  styles["map-container__input-container__edit-input__button"]
                }
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

const PlacesAutoComplete = ({
  setSelected,
  setCenter,
  setInputAddress,
  setResults,
  handleEdit,
  customAddress,
}: IPlacesAutocompleteProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected(lat, lng);
    setCenter({ lat, lng });
    setInputAddress(address);
    setResults(results);
  };

  function handleCustomAddress() {
    handleEdit();
    clearSuggestions();
  }
  return (
    <Combobox onSelect={handleSelect} className={styles["combo-box-container"]}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search an address"
        className={styles["combo-box-container__input"]}
      ></ComboboxInput>
      <ComboboxPopover
        portal={false}
        className={styles["combo-box-container__popover"]}
      >
        <ComboboxList className={styles["combo-box-container__popover__list"]}>
          {status === "OK" && (
            <div>
              <div
                className={styles["combo-box-container__popover__list__option"]}
                onClick={handleCustomAddress}
              >
                {customAddress}
              </div>
              {data.map(({ place_id, description }) => (
                <div
                  key={place_id}
                  className={
                    styles["combo-box-container__popover__list__container"]
                  }
                >
                  <Icon
                    icon={<FaMapMarkerAlt />}
                    className={
                      styles["combo-box-container__popover__list__icon"]
                    }
                  />
                  <ComboboxOption
                    value={description}
                    className={
                      styles["combo-box-container__popover__list__option"]
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
