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
};

const defaultContextValues = {
  isUserLogged: false,
  setIsUserLogged: () => Boolean,
  isSidebarOpen: false,
  setIsSidebarOpen: () => Boolean,
  paddingLeft: "0px",
};

export const Context = createContext<ContextProps>(defaultContextValues);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isUserLogged, setIsUserLogged] = useState(
    defaultContextValues.isUserLogged
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    defaultContextValues.isSidebarOpen
  );
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
