import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";

const links = [
  { id: 1, href: "#welcome", title: "Welcome" },
  { id: 2, href: "#projects", title: "Projects" },
  { id: 3, href: "#contacts", title: "Contacts" },
];

export const Navbar = () => {
  const { hash } = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className="main-link">
        <h3>Portfolio</h3>
      </Link>
      <nav className="link-wrapper">
        <ul>
          {links.map(({ id, href, title }) => (
            <li key={id}>
              <a href={href} className={hash === href ? "active" : ""}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
