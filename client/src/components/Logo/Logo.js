import React from "react";
import "./Logo.css";
import Logoimg from "./kis.png"


const Logo = props => (
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-md-auto" id="contentDiv">
                <img className="logo animated fadeInDownBig" src={Logoimg} alt="KIS logo"></img>
                <hr className="topRule"></hr>
                <h2>Knowledge is sexy.</h2>
                <hr className="bottomRule"></hr>
                <p className="askQuestion"> Ask any sex or sexual health questions here.</p>
                <div className="form-box">
                    <form action="/" method="POST">
                        <textarea type="text" id="questionBox" placeholder="#AskQuestion"></textarea> <br></br>
                        <button type="button" className="btn btn-outline-secondary" id="submitButton"><a className="button-href" href ="askquestions.html">SUBMIT</a></button>
                    </form>
                </div>
            </div>
        </div>

    </div>)


export default Logo;
