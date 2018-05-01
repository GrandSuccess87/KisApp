import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">KIS</a>
      
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">

        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar hamburger" ></span>
        <span className="icon-bar hamburger"></span>
        <span className="icon-bar hamburger"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="resources">RESOURCES</a>
          </li>
        </ul>
      </div>
    </nav>
);

export default Nav;
