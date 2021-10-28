import React, { useContext, useEffect } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Context } from "../../pages/_app";
import { Container } from "./styles";

export const Sidebar = (): JSX.Element => {
  const { isUserLogged, isSidebarOpen, setIsSidebarOpen, setIsUserLogged } =
    useContext(Context);

  const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <div className="navbar">
        <div className="menu-bars sidebar-close">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div className={`${isUserLogged ? "login-menu-logged" : "login-menu"}`}>
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
          <li className="nav-text sidebar-close">
            <Link href="/home">
              <a className="sidebar-close">Home</a>
            </Link>
          </li>
          <li className="nav-text sidebar-close">
            <Link href="/players-nearby">
              <a className="sidebar-close">Search For a Player</a>
            </Link>
          </li>
          <li className="nav-text sidebar-close">
            <Link href="/card-searcher">
              <a className="sidebar-close">Card Searcher</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
