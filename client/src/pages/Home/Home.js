import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
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


            </Wrapper>
           </div>
        );
    }
}


export default Home;
