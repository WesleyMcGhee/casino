// Globals imports
import { Link } from "wouter";
import { useState } from "react";
import { NavSlideout } from "../NavSlideout/NavSlideout.component";

// Types
import type { ReactElement } from "react";
import { NavSlideoutLinks } from "../NavSlideout/NavSlideout.types";

// Styles
import "./Header.css";

function Header(): ReactElement {
  const [showing, setShowing] = useState<boolean>(false);

  const handleClick = () => {
    setShowing(!showing);
  };

  const links: NavSlideoutLinks[] = [
    {
      name: "Blackjack",
      link: "/blackjack",
    },
    {
      name: "Dice",
      link: "/dice",
    },
  ];

  return (
    <header className="header">
      <div className="logoContainer">
        <h1 className="logo">Logo</h1>
      </div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <div className="games-con">
              {!showing ? "Games" : <NavSlideout links={links} />}
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/support">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export { Header };
