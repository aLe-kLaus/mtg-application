import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { useRouter } from "next/dist/client/router";

type ContextProps = {
  isUserLogged: boolean;
  setIsUserLogged: React.Dispatch<SetStateAction<boolean>>;
  userID: string;
  setUserID: React.Dispatch<SetStateAction<string>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  paddingLeft: string;
  lat: number;
  setLat: React.Dispatch<SetStateAction<number>>;
  lng: number;
  setLng: React.Dispatch<SetStateAction<number>>;
  route: string;
  setRoute: React.Dispatch<SetStateAction<string>>;
};

const defaultContextValues = {
  isUserLogged: false,
  setIsUserLogged: () => Boolean,
  userID: "",
  setUserID: () => String,
  isSidebarOpen: false,
  setIsSidebarOpen: () => Boolean,
  paddingLeft: "0px",
  lat: -15.7801,
  setLat: () => Number,
  lng: -47.9292,
  setLng: () => Number,
  route: "/home",
  setRoute: () => String,
};

export const Context = createContext<ContextProps>(defaultContextValues);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isUserLogged, setIsUserLogged] = useState(
    defaultContextValues.isUserLogged
  );
  const [userID, setUserID] = useState(defaultContextValues.userID);
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    defaultContextValues.isSidebarOpen
  );
  const [lat, setLat] = useState(defaultContextValues.lat);
  const [lng, setLng] = useState(defaultContextValues.lng);
  const [route, setRoute] = useState(defaultContextValues.route);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  const router = useRouter();
  useEffect(() => {
    document.addEventListener("mousedown", (evt: any) => {
      if (!evt.target.classList.contains("sidebar-close")) {
        setIsSidebarOpen(false);
      }
    });
    setIsUserLogged(!!localStorage.getItem("mtg-user-token") as boolean);
    setUserID(localStorage.getItem("mtg-user-token") ?? "");
  }, []);

  return (
    <React.Fragment>
      <Context.Provider
        value={{
          isUserLogged,
          setIsUserLogged,
          userID,
          setUserID,
          isSidebarOpen,
          setIsSidebarOpen,
          paddingLeft,
          lat,
          setLat,
          lng,
          setLng,
          route,
          setRoute,
        }}
      >
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Sidebar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Context.Provider>
    </React.Fragment>
  );
}

export default MyApp;
