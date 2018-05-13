import React from "react";
import "./UserResults.css";



const UserResults = props => { 
  console.log(props);

  if(props.results.length > 0){
    return (    
      <div className = "container">
      <div className="row justify-content-lg-center">
        <div className="col-lg-12" id="contentDiv">
          <div className="accordion" id="accordion">
            
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button 
                  id="button-text"
                  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    {props.results[0].question}
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div 
                id="card-body-styling"
                className="card-body">
                {props.results[0].answer}
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button 
                  id="button-text"
                  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {props.results[1].question}
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div 
                id="card-body-styling"
                className="card-body">
                {props.results[1].answer}
                </div>
              </div>
            </div>
    
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button 
                  id="button-text"
                  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {props.results[2].question}
                  </button>
                </h5>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div 
                id="card-body-styling"
                className="card-body">
                {props.results[2].answer}
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
      </div>
    )} else {
      return null
    }
  } 

  

export default UserResults;