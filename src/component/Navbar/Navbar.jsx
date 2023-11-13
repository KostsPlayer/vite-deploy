import React from "react";
import { Link } from "react-router-dom";
import { NavbarCursor, NavbarAnimation } from "./NavbarProperty";

export default function Navbar() {
  const { navbar, magnets } = NavbarAnimation();
  const { onEnterNavbar, onLeaveNavbar } = NavbarCursor();

  return (
    <>
      <nav className="nav-nav" ref={navbar}>
        <Link
          to="/vite-deploy"
          className="nav-logo"
          onMouseEnter={onEnterNavbar}
          onMouseLeave={onLeaveNavbar}
          ref={(e) => e && magnets.current.push(e)}
        >
          Shopionz
        </Link>
        <ul className="nav-ul">
          <li
            className="nav-li"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
          >
            <Link className="nav-link" to="/vite-deploy">
              Home
            </Link>
          </li>
          <li
            className="nav-li"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
          >
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          <li
            className="nav-li"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
          >
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
        <div className="nav-icon">
          <span
            className="material-symbols-outlined"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
          >
            search
          </span>
          <span
            className="material-symbols-outlined"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
          >
            local_mall
          </span>
          <Link
            className="material-symbols-outlined"
            onMouseEnter={onEnterNavbar}
            onMouseLeave={onLeaveNavbar}
            ref={(e) => e && magnets.current.push(e)}
            to="/login"
          >
            person
          </Link>
        </div>
      </nav>
    </>
  );
}
