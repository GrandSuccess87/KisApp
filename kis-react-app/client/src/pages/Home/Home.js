import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import UserQuestion from "../../components/UserQuestion";
import UserResults from "../../components/UserResults";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h1 className="Home-title">Welcome to React</h1>
          </header>
          <p className="Home-intro">
            To get started, edit <code>src/Home.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  
  export default Home;


