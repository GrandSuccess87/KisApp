import React from "react";
import "./Logo.css";


const Logo = props => (
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto" id="contentDiv">
                <img class="logo animated fadeInDownBig" src="./kis.png" alt="KIS logo"></img>
                <hr class="topRule"></hr>
                <h2>Knowledge is sexy.</h2>
                <hr class="bottomRule"></hr>
                <p class="askQuestion"> Ask any sex or sexual health questions here.</p>
                <div class="form-box">
                    <form action="/" method="POST">
                        <textarea type="text" id="questionBox" placeholder="#AskQuestion"></textarea> <br></br>
                        <button type="button" class="btn btn-outline-secondary" id="submitButton"><a class="button-href" href ="askquestions.html">SUBMIT</a></button>
                    </form>
                </div>
            </div>
        </div>

    </div>)


export default Logo;
