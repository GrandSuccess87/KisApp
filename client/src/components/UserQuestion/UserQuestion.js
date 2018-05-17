import React from "react"
import "./UserQuestion.css"


const UserQuestion = props => {
   
   
    return (
    <div>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary" id="submitButton">SUBMIT</button>
        </form>
    </div>
)
}

export default UserQuestion;
