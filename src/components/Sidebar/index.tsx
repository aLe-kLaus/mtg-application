import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Context } from "../../pages/_app";
import { Container } from "./styles";
import { useRouter } from "next/dist/client/router";

export const Sidebar = (): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    isUserLogged,
    isSidebarOpen,
    setIsSidebarOpen,
    setIsUserLogged,
    setRoute,
    setUserID,
  } = useContext(Context);

  const router = useRouter();

  const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <div className="navbar">
        <div className="menu-bars sidebar-close">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {isUserLogged && (
            <div>
              <Link href="/my-favorite-cards">
                <div className="fav-item">
                  <FaIcons.FaHeart />
                </div>
              </Link>
            </div>
          )}
          <div
            className={`${isUserLogged ? "login-menu-logged" : "login-menu"}`}
            onMouseEnter={() => (isUserLogged ? setIsHovering(true) : null)}
            onMouseLeave={() => (isUserLogged ? setIsHovering(false) : null)}
          >
            {!isUserLogged ? (
              <React.Fragment>
                <Link href="/sign-up">
                  <div className="sign-up">
                    <a>Sign Up</a>
                  </div>
                </Link>
                <Link href="/sign-in">
                  <div className="sign-in">
                    <a>Sign In</a>
                  </div>
                </Link>
              </React.Fragment>
            ) : (
              <Link href="/my-profile">
                <div className="logged-user">
                  <FaIcons.FaUser />
                </div>
              </Link>
            )}
            {isHovering && (
              <div
                onClick={() => {
                  router.push("/sign-in");
                  setIsUserLogged(false);
                  setUserID("");
                  localStorage.removeItem("mtg-token");
                  setIsHovering(false);
                }}
                style={{
                  position: "absolute",
                  width: 100,
                  height: 50,
                  background: "#d4d4d4",
                  right: 0,
                  top: "60px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                }}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </div>
      <nav
        className={
          isSidebarOpen
            ? "nav-menu active sidebar-close"
            : "nav-menu sidebar-close"
        }
      >
        <ul className="nav-menu-items sidebar-close">
          <li className="navbar-toggle sidebar-close">
            <div className="menu-bars sidebar-close">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          <li
            className="nav-text sidebar-close"
            onClick={() => setRoute("/home")}
          >
            <Link href="/home">
              <a className="sidebar-close">Home</a>
            </Link>
          </li>
          <li
            className="nav-text sidebar-close"
            onClick={() => setRoute("/players-nearby")}
          >
            <Link href="/players-nearby">
              <a className="sidebar-close">Search For a Player</a>
            </Link>
          </li>
          <li
            className="nav-text sidebar-close"
            onClick={() => setRoute("/card-searcher")}
          >
            <Link href="/card-searcher">
              <a className="sidebar-close">Search for a card to Trade/Sell</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
