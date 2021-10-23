import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, MapContainer, SeachContainer } from "./styles";
import locationService from "../../services/locationService";
import cities from "../../JSON/cities.json";
import { Select } from "../../components/Inputs/Select";
import { GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";

const CustomGoogleMap = () => {
  const { lat, lng } = useContext(Context);
  return <GoogleMap defaultZoom={5} defaultCenter={{ lat, lng }}></GoogleMap>;
};

const WrappedMap = withScriptjs(withGoogleMap(CustomGoogleMap));

const PlayerNearby = () => {
  const { paddingLeft, setLng, setLat } = useContext(Context);
  const [currentCity, setCurrentCity] = useState({
    id: "882",
    name: "Brasília",
    state: "7",
  });

  const getCityLatAndLong = () => {
    locationService.getCityLatAndLng(currentCity.name).then((response: any) => {
      setLat(response.data.results[0].geometry.location.lat);
      setLng(response.data.results[0].geometry.location.lng);
    });
  };

  const handleChangeCity = (id: string) => {
    const currentCity = cities.find((city) => city.id == id);
    setCurrentCity(currentCity ?? { id: "79", name: "Acrelândia", state: "1" });
    getCityLatAndLong();
  };

  return (
    <Container style={{ paddingLeft }}>
      <SeachContainer>
        <Select
          onChange={(evt) => handleChangeCity(evt.target.value)}
          id="city"
          name="city"
          label="Select Your City"
        >
          {cities
            .sort((a, b) => {
              const sorted = a.name
                .toLowerCase()
                .localeCompare(b.name.toLowerCase());
              return sorted;
            })
            .map((c) => {
              return (
                <option id={c.id} value={c.id} key={c.id}>
                  {c.name}
                </option>
              );
            })}
        </Select>
      </SeachContainer>

      <MapContainer>
        <div style={{ width: "100%", height: 1500 }}>
          <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAcUXNSeuYg4TVRcpMTgsxzzLY0A9YonSw"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `700px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></WrappedMap>
        </div>
      </MapContainer>
    </Container>
  );
};

export default PlayerNearby;
