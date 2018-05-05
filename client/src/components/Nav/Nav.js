import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
<<<<<<< HEAD
      <a class="navbar-brand" href="/">KIS</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="navbar-right ">
            <a class="nav-link" href="/about">ABOUT <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item navbar-right">
            <a class="nav-link" href="/resources">RESOURCES</a>
=======
      <a className="navbar-brand" href="#">KIS</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="navbar-right ">
            <a className="nav-link" href="./about">ABOUT <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item navbar-right">
            <Link to="/resources" className="nav-link">RESOURCES</Link>
>>>>>>> d9164f78ec065309c42e0ffd4eca11b3caf3fe3d
          </li>
        </ul>

      </div>
    </nav>
);

export default Nav;
