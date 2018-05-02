import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import UserResults from "../../components/UserResults";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import Form from "../../components/Form";


class Home extends Component {
    state = {
        questions: [],
        userInput: ""
    };


    render() {
        return(
           <div>
            <Nav />
            <Wrapper>
            <Logo />
            <Form />
            <UserResults />
            </Wrapper>
           </div>
        );
    }
}


export default Home;
