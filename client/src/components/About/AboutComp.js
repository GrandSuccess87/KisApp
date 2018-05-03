import React from "react";
import "./AboutComp.css";
import Erica from "./erica.jpg";
import Quintessa from "./quintessa.jpg";

const AboutComp = props => (
  <div className="container">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2"></div>
    <div className="col-md-auto" id="contentDiv"></div>
      <h3>OUR TEAM </h3>
        </div>
        <hr className="bottomRule"></hr>

        <p className="aboutText"> At K.I.S., we believe all young people should have the information they need to make healthy decisions in their own lives. With the help of health educators and programmers alike, so we built a tool to help young people do exactly that.
          K.I.S is a platform to encourage curiosity, learning, and health with an inclusive and easy-to-navigate environment. With a simple search, users are able to find quick and reliable answers to any sexual health question and can get connected to resources to help them make healthy decisions about their own sexual health. All answers and information at K.I.S. are answered, researched, and verified by public health experts and sexual health educators.</p>

        <hr class="bottomRule"></hr>

        <div class="card">
          <img className="card-img-top" src={Erica} alt="sarah leone"></img>
          {/* <img className="logo animated fadeInDownBig" src={Logoimg} alt="KIS logo"></img> */}

          <div className="card-body">
            <h5 className="card-title">SARAH LEONE</h5>
            <p className="card-text">Orinally from Dallas, Erin is our Founder and Project Manager. </p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={Quintessa} alt="quintessaanderson"></img>
          <div className="card-body">
            <h5 className="card-title">QUINTESSA ANDERSON</h5>
            <p className="card-text">Full Stack Developer from Chicago. </p>
          </div>
        </div>

        <div className="card">
        <img className="card-img-top" src={Erica} alt="erica barraca"></img>
          <div className="card-body">
            <h5 className="card-title">ERICA BARRACA</h5>
            <p className="card-text">Web Developer from Chicago, focusing on Front End Development. </p>
          </div>
        </div>

        <div className="card">
        <img className="card-img-top" src={Erica} alt="Ozzy Cardenas"></img>
          <div className="card-body">
            <h5 className="card-title">OZZY CARDENAS</h5>
            <p className="card-text">Web Developer from Chicago, focusing on Front End Development. </p>
          </div>
        </div>
    </div>
);

export default AboutComp;
