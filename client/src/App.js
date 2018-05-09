import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import ResourcesPage from "./pages/Resources"
import GoogleLogin from "react-google-login"



const responseGoogle = (response) => {
  console.log(response);
}
 
const App = () => (
  <Router>
  <div>
  <GoogleLogin
    clientId="73580094877-njrsmo353tvtk1kt4c36mqgfiqumbll5.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resources" component={ResourcesPage} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
</Router>
);

export default App;
