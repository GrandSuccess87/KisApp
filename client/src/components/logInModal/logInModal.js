import React from "react";
import "./logInModal.css";

const Modal = props => (
<div className = "container">
<div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="logInModal-window">
    <div className="modal-dialog modal-sm">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">PLEASE LOG IN BEFORE <br></br>
                 STARTING YOUR SEARCH</h4>
                <hr></hr>
                <p className="modal-text">
                    Thank you for visiting Knowledge is Sexy.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary modal-button" id="modalButton" data-dismiss="modal">GOT IT</button>
            </div>
        </div>
    </div>
</div>
</div>
);

export default Modal;

