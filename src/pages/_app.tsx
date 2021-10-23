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

type ContextProps = {
  isUserLogged: boolean;
  setIsUserLogged: React.Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  paddingLeft: string;
  lat: number;
  setLat: React.Dispatch<SetStateAction<number>>;
  lng: number;
  setLng: React.Dispatch<SetStateAction<number>>;
};

const defaultContextValues = {
  isUserLogged: false,
  setIsUserLogged: () => Boolean,
  isSidebarOpen: false,
  setIsSidebarOpen: () => Boolean,
  paddingLeft: "0px",
  lat: -15.7801,
  setLat: () => Number,
  lng: -47.9292,
  setLng: () => Number,
};

export const Context = createContext<ContextProps>(defaultContextValues);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isUserLogged, setIsUserLogged] = useState(
    defaultContextValues.isUserLogged
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    defaultContextValues.isSidebarOpen
  );
  const [lat, setLat] = useState(defaultContextValues.lat);
  const [lng, setLng] = useState(defaultContextValues.lng);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  useEffect(() => {
    document.addEventListener("mousedown", (evt: any) => {
      if (!evt.target.classList.contains("sidebar-close")) {
        setIsSidebarOpen(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Context.Provider
        value={{
          isUserLogged,
          setIsUserLogged,
          isSidebarOpen,
          setIsSidebarOpen,
          paddingLeft,
          lat,
          setLat,
          lng,
          setLng,
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
