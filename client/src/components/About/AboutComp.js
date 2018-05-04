import React from "react";
import "./AboutComp.css";
import Erica from "./erica.jpg";
import Quintessa from "./quintessa.jpg";

const AboutComp = props => (
  <div className="container">
  <div className="row justify-content-lg-center">
      <div className="col-lg-6" id="contentDiv">

      <h3>OUR TEAM </h3>
        </div>
        <hr className="bottomRule"></hr>

        <p className="aboutText"> At K.I.S., we believe all young people should have the information they need to make healthy decisions in their own lives. With the help of health educators and programmers alike, so we built a tool to help young people do exactly that.
          K.I.S is a platform to encourage curiosity, learning, and health with an inclusive and easy-to-navigate environment. With a simple search, users are able to find quick and reliable answers to any sexual health question and can get connected to resources to help them make healthy decisions about their own sexual health. All answers and information at K.I.S. are answered, researched, and verified by public health experts and sexual health educators.</p>

        <hr className="bottomRule"></hr>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">QUINTESSA ANDERSON</h5>
            <img className="card-img-top" src={Quintessa} alt="quintessa anderson"></img>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us. </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ERICA BARRACA</h5>
            <img className="card-img-top" src={Erica} alt="sarah leone"></img>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us..</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">OZZY CARDENAS</h5>
            <img className="card-img-top" src={Erica} alt="ozzy cardenas"></img>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us. Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">SARAH LEONE</h5>
            <img className="card-img-top" src={Erica} alt="sarah leone"></img>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us.Some quick example text to build on the card title and make up the bulk of the card's content.Lorem Ipsum write stuff to fill the space here about us..</p>
          </div>
        </div>


</div>
    </div>
);

export default AboutComp;
