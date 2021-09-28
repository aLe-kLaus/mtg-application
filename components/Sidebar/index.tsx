import React, { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const Sidebar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          <li className="nav-text">
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav-text">
            <Link href="/search-card">
              <a>Card Searcher</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
