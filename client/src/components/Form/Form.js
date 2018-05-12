import React, { Component } from "react";
import UserResults from "../../components/UserResults";
import axios from "axios";
import Modal from "../../components/Modal";

class Form extends Component {
  // Setting the component's initial state
  state = {
  userQuestion: "",
  searchResults: []
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
    this.getResults();
    this.setState({
      userQuestion: ""
    });
  };

  getResults = () => {
    axios.post("/api/questions",{
      userQuestion: this.state.userQuestion
    }).then(res => {
      this.setState({
        searchResults: res.data
      })
    })
    .catch(err => console.log(err));
  };

  // function to clear state for testing
  // clearSearchState = event => {
  //   event.preventDefault();
  //   this.setState({
  //     searchResults: []
  //   })
  // };

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
                    className="form-control "
                    value={this.state.userQuestion}
                    name="userQuestion"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="ask here!"/>
                <button className="btn btn-primary mt-3" onClick={this.handleFormSubmit}>SUBMIT</button>
                {/* Clear state button for testing */}
                {/* <button className="btn btn-primary mt-3" onClick={this.clearSearchState}>Clear SearchState</button> */}
                <br/>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#question-window">We dont have a response. Please submit your question to our database and we will get back to you soon with an answer.
                </button>
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
