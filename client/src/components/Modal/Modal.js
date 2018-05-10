import React from "react";
import "./Modal.css";

const Modal = props => (
<div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">NOT SATISFIED WITH THESE QUESTIONS?</h4>
                <button></button>
                <hr></hr>
                <p className="modal-text">
                    Submit your question and we'll answer it! When others have your question, they'll get to see the answer.</p>
            </div>
            <div className="modal-footer">
                <button type="button" class="btn btn-secondary modal-button" data-dismiss="modal">CANCEL</button>
                <button type="button" class="btn btn-secondary modal-button" data-dismiss="modal">SUBMIT QUESTION</button>
            </div>
        </div>
    </div>
</div>

export default Modal;
