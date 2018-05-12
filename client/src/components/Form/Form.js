import React, { Component } from "react";
import UserResults from "../../components/UserResults";
import axios from "axios";

class Form extends Component {
  // Setting the component's initial state
  state = {
  userQuestion: "",
  searchResults: [],
  validationMessage: false
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

    if(this.state.userQuestion){
      axios.post("/api/questions",{
        userQuestion: this.state.userQuestion
      }).then(res => {
        this.setState({
          searchResults: res.data,
          validationMessage: false
        })
      })
      .catch(err => console.log(err));
    } else {
        this.setState({validationMessage: true})
    }
    

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
            <form>
              <div className="form-group">
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
                {/* Clear state button for testing */}
                {/* <button className="btn btn-primary mt-3" onClick={this.clearSearchState}>Clear SearchState</button> */}
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
