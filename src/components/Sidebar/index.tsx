import React, { useContext } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Context } from "../../pages/_app";
import { Container } from "./styles";

export const Sidebar = (): JSX.Element => {
  const { isUserLogged, isSidebarOpen, setIsSidebarOpen } = useContext(Context);

  const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <div className="navbar">
        <div className="menu-bars sidebar-close">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <div className="login-menu">
          {!isUserLogged ? (
            <React.Fragment>
              <div className="sign-up">
                <Link href="/sign-up">
                  <a>Sign Up</a>
                </Link>
              </div>
              <div className="sign-in">
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <div className="">
              <FaIcons.FaUser />
            </div>
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
            <Link href="/card-searcher">
              <a className="sidebar-close">Card Searcher</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};