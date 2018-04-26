import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import UserQuestion from "../../components/UserQuestion";
import UserResults from "../../components/UserResults";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";

class Home extends Component {
    state = {
        questions: []
    };

    render() {
        return(
            <h1>
              <h1>QUESTION SEARCH BAR</h1>
            </h1>
        );
    }
}

export default Home;