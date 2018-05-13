import React, { Component } from "react";
import UserResults from "../../components/UserResults";
import axios from "axios";
import Modal from "../../components/Modal";

class Form extends Component {
  // Setting the component's initial state
  state = {
  userQuestion: "",
  searchResults: [],
  validationMessage: false,
  returnedResults: 1
  };

  // prints state to console for testing
  componentDidUpdate(){
    console.log(this.state);
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // handles button response and validation
    this.getResults();
    this.setState({
      userQuestion: ""
    });
  };

  getResults = () => {

    if(this.state.userQuestion){
      axios.post("/api/questions",{
        userQuestion: this.state.userQuestion
      }).then(res => {
        this.setState({
          searchResults: res.data,
          validationMessage: false,
          returnedResults: 1
        })
        if(res.data.length === 0){
          this.setState({returnedResults:0})
        }
      })
      .catch(err => console.log(err));
    } else {
        this.setState({validationMessage: true})
    }

  };

  render() {

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <div>
          <Modal/>
            <form>
              <div className="form-group">
              <p className="askQuestion"> Ask any sex or sexual health questions here.</p>

                <input
                    id="search-input"
                    className={this.state.validationMessage ? "form-control border-danger" : "form-control"}
                    value={this.state.userQuestion}
                    name="userQuestion"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="ask here!"/>
                    {this.state.validationMessage ?
                    <p className="text-danger">Make sure to ask a question silly!</p> : null}
                <button className="btn btn-primary mt-3" onClick={this.handleFormSubmit}>SUBMIT</button>
                <br/>
                <br/>
                {this.state.returnedResults === 0
                    ? <div className="card w-50 mx-auto">
                      <div className="card-body">
                      <h1 className="card-title">We don't have a response yet</h1>
                      <p className="card-text">Click to submit your question and we will get back to you soon with an answer</p>
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#question-window" id="database-button">Click Me</button>
                      </div>
                      </div> : null}
              </div>
            </form>
          </div>
          <div>
            <UserResults results={this.state.searchResults}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;