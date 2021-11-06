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
