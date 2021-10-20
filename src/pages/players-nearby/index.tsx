import React, { useContext, useState } from "react";
import locationService from "../../services/locationService";
import { Context } from "../_app";
import { Container } from "./styles";

const PlayerNearby = () => {
  const { paddingLeft } = useContext(Context);
  const [latAndLng, setLatAndLng] = useState({
    lat: 0,
    lng: 0,
  });

  // const getCityLatAndLong = () => {
  //   locationService.getCityLatAndLng(currentCity.name).then((response: any) => {
  //     const data = response.data.results[0].geometry.location.lat;
  //     setLatAndLng({
  //       lat: response.data.results[0].geometry.location.lat as number,
  //       lng: response.data.results[0].geometry.location.lng as number,
  //     });
  //   });
  // };
  return (
    <Container style={{ paddingLeft }}>
      <p>Test</p>
    </Container>
  );
};

export default PlayerNearby;
