import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ResourcesPage from "./pages/Resources";
// import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import { GoogleLogout, GoogleLogin } from "../src/index";

const clientId = '73580094877-njrsmo353tvtk1kt4c36mqgfiqumbll5.apps.googleusercontent.com'
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'

const success = response => {
  console.log(response)
}

const error = response => {
  console.error(response)
}

const loading = () => {
  console.log('loading')
}

const logout = () => {
  console.log('logout')
}


const App = () => (
  <Router>

  <div>
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/analytics"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      offline={false}
      approvalPrompt="force"
      responseType="id_token"
      isSignedIn
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Login with Google</span>
    </GoogleLogin>

    {/* <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/adwords"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      approvalPrompt="force"
      responseType="code"
      // uxMode="redirect"
      // redirectUri="http://google.com"
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Adwords</span>
    </GoogleLogin> */}

    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />


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
