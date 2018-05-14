import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ResourcesPage from "./pages/Resources";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
// import FacebookLogin from 'react-facebook-login';

const responseGoogle = (response) => {
  console.log(response);
}

const logout = (response) => {
  console.log(response);
}


const App = () => (
  <Router>
  <div>
  <GoogleLogin
    clientId="73580094877-njrsmo353tvtk1kt4c36mqgfiqumbll5.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />

  <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
  >
    </GoogleLogout>

    {/* <FacebookLogin
    appId="1906569722966905"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook" /> */}

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
