import React, { useContext, useEffect, useState } from "react";
import { Context } from "../_app";
import { Container, SeachContainer } from "./styles";
import locationService from "../../services/locationService";
import cities from "../../JSON/cities.json";
import { Select } from "../../components/Inputs/Select";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import { mapStyle } from "./map";
import userServices from "../../services/userServices";
import { useRouter } from "next/dist/client/router";

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries: [
  "geometry" | "places" | "drawing" | "localContext" | "visualization"
] = ["places"];

const PlayerNearby = () => {
  const { paddingLeft } = useContext(Context);
  const router = useRouter();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAcUXNSeuYg4TVRcpMTgsxzzLY0A9YonSw",
    libraries,
  });

  const [latLng, setLatLng] = useState({
    lat: -15.826691,
    lng: -47.921822,
    latSpace: 0,
    lngSpace: 0,
  });
  const [usersByCity, setUsersByCity] = useState([]);
  const [zoom, setZoom] = useState(4);

  if (loadError) return "load error";
  if (!isLoaded) return "loading";

  const handleChangeCity = async (id: string) => {
    const currentCity = cities.find((city) => city.id == id);
    const cityResponse: any = await locationService.getCityLatAndLng(
      currentCity?.name as any
    );
    const cityData = cityResponse.data.results[0].geometry;
    const lat = cityData.location.lat;
    const lng = cityData.location.lng;
    const latSpace =
      cityData.bounds.northeast.lat - cityData.bounds.southwest.lat;
    const lngSpace =
      cityData.bounds.northeast.lng - cityData.bounds.southwest.lng;

    setLatLng({
      lat,
      lng,
      latSpace,
      lngSpace,
    });

    const usersResponse: any = await userServices.getUsersByCityName(
      currentCity?.name as string
    );
    setUsersByCity(usersResponse?.data);
    setZoom(12);
  };

  return (
    <Container style={{ paddingLeft }}>
      <SeachContainer style={{ marginLeft: paddingLeft }}>
        <Select
          onChange={(evt) => handleChangeCity(evt.target.value)}
          id="city"
          name="city"
          label="Select Your City And Find Players Nearby You"
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
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100vh",
        }}
        zoom={zoom}
        center={{ lat: latLng.lat, lng: latLng.lng }}
        options={options}
      >
        {usersByCity.map((user: any, index) => {
          const latMax = latLng.latSpace;
          const latRandom = Math.random() * 0.3;
          const userRandomLat = latLng.lat - latMax * latRandom;
          const lngMax = latLng.lngSpace;
          const lngRandom = Math.random() * 0.3;
          const userRandomLng = latLng.lng - lngMax * lngRandom;
          return (
            <Marker
              key={index}
              position={{ lat: userRandomLat, lng: userRandomLng }}
              icon={{
                url: "/player-icon.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => {
                router.push(`/user-profile?user=${user.id}`);
              }}
            />
          );
        })}
      </GoogleMap>
    </Container>
  );
};

export default PlayerNearby;
