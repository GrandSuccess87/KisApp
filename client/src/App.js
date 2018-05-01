import React from "react";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Search from "./components/Search";



const App = () => (
  <div>
    <Nav />
    <Logo />
    <Home />
    <Question />


  </div>
);

export default App;
