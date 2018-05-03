import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">KIS</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="navbar-right ">
            <a class="nav-link" href="/about.js">ABOUT <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item navbar-right">
            <a class="nav-link" href="#">RESOURCES</a>
          </li>
        </ul>

      </div>
    </nav>
);

export default Nav;
