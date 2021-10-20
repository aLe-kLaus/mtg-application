import { locationAPI } from "./apis";

export default {
  getCityLatAndLng(city: string) {
    const response = locationAPI.get(
      `/json?address=${city}&key=AIzaSyAcUXNSeuYg4TVRcpMTgsxzzLY0A9YonSw`
    );
    return response;
  },
};
