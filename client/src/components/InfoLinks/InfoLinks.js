import React from "react";
import "./Resources.css";


const Resources = props => (
    <div className="container">
    <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto" id="contentDiv">

            <div>
                <h3>RESOURCES</h3>
            </div>
            <div className="container">
            <div className="row justify-content-lg-center">
            <div className="col-lg-6" id="contentDiv">

            <hr className="bottomRule"></hr>

            <p className="aboutText">Below is a list of links and resources for additional information on Sexual Health. If you have suggestions or need additional assistance, be sure to contact us. Thanks for stopping by!</p>

            <hr className="topRule"></hr>

            <div className="card-link">
                <div className="body">

                    <p>
                        <strong>National Sexual Assault Hotline:</strong>
                        Call 800.656.HOPE (4673) to be connected with a trained staff member from a sexual assault service provider in your area. More information at
                        <a class="resource-link" href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline/">www.rainn.org/about-national-sexual-assault-telephone-hotline.</a>
                    </p>

                    <hr className="topRule"></hr>
                    <p>
                        <strong>Get Tested!</strong>
                        CDC's national HIV & STI clinic locator.
                        <a class="resource-link" href=" https://gettested.cdc.gov/">gettested.cdc.gov.</a>
                    </p>

                    <hr className="topRule"></hr>
                    <p>
                        <strong>Find free condoms near you!</strong>
                        CDC's national HIV & STI clinic locator.
                        <a class="resource-link" href=" http://www.condomfinder.org/find.php">www.condomfinder.org</a>
                    </p>

                    <hr className="topRule"></hr>

                    <div className="card-question">
                        <div className="card-body cardBlack">
                            <h5 className="card-title">
                                CONTACT US
                            </h5>
                            Knowledge is Sexy
                            <br></br>
                            2145 Sheridan Rd, Evanston, IL 60208<br></br>
                            312.847.1222 | KIS@gmail.com
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
    );

export default Resources;
