import React from "react";
import "./Nav.css";
import { GoogleLogout, GoogleLogin } from "../../../src/index";

const clientId = '73580094877-njrsmo353tvtk1kt4c36mqgfiqumbll5.apps.googleusercontent.com'
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'




const Nav = props => { 
  

  const success = response => {
    // console.log(response)
    // console.log(response.w3.ofa) //Path to get persons logged name
    props.logIn()
    props.setName(response.w3.ofa)
  }
  
  const error = response => {
    console.error(response)
  }
  
  const loading = () => {
    console.log('loading')
  }
  
  const logout = () => {
    console.log('logout')
    props.logOut()
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">KIS</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="navbar-right ">
          <a className="nav-link" href="/about">ABOUT <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item navbar-right">
          <a className="nav-link" href="/resources">RESOURCES</a>
        </li>
      </ul>
      {props.log ? 
              <GoogleLogout buttonText={'LOGOUT ' + props.logName.toUpperCase()} onLogoutSuccess={logout}  />
              : 
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
            LOGIN
            </GoogleLogin>
        }
    </div>
  </nav>
)
};

export default Nav;
