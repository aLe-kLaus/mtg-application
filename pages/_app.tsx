import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../components/Sidebar";
import "../components/Sidebar/styles.css";

type ContextProps = {
  isUserLogged: boolean;
  setIsUserLogged: React.Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
};

const defaultContextValues = {
  isUserLogged: false,
  setIsUserLogged: () => Boolean,
  isSidebarOpen: false,
  setIsSidebarOpen: () => Boolean,
};

export const Context = createContext<ContextProps>(defaultContextValues);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isUserLogged, setIsUserLogged] = useState(
    defaultContextValues.isUserLogged
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    defaultContextValues.isSidebarOpen
  );

  return (
    <React.Fragment>
      <Context.Provider
        value={{
          isUserLogged,
          setIsUserLogged,
          isSidebarOpen,
          setIsSidebarOpen,
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
