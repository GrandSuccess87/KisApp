import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state
  state = {
  userQuestion: ""
  };

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
    if (!this.state.userQuestion) {
      alert("Don't be shy! Go ahead and ask!");
    }  else {
      alert(`Your Question is ${this.state.userQuestion} and this button works!`);
    }

    this.setState({
      userQuestion: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
      <div>
        <p>

          Your Question is: {this.state.userQuestion}
        </p>
        <form>
        <div className="form-group">
        <input
            className="form-control "
            value={this.state.userQuestion}
            name="userQuestion"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Type your question here"
          />
          <button className="btn btn-primary mt-3" onClick={this.handleFormSubmit}>SUBMIT</button>
        </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Form;
