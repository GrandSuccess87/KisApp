import React from "react";
import "./Modal.css";

const Modal = props => (
<div className = "container">
<div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="question-window">
    <div className="modal-dialog modal-sm">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">NOT SATISFIED WITH <br/>THESE QUESTIONS?</h4>
                <hr></hr>
                <p className="modal-text">
                    Submit your question and we'll answer it! When others have your question, they'll get to see the answer.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary modal-button" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn btn-secondary modal-button" data-dismiss="modal">SUBMIT QUESTION</button>
            </div>
        </div>
    </div>
</div>
</div>
)

export default Modal;
