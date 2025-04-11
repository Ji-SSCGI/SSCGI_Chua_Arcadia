import React, { useState } from "react";
import HeroLogo from "./HeroLogo";

function HomeNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <HeroLogo />
        <a className="navbar-brand" href="#">
          Arcadia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Who We Are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="publications">
                Publications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="initiatives">
                Initiatives
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
