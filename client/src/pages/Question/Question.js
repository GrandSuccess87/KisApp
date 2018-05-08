import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper"


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
            <h1>There is nothing built on this route yet. Be Patient</h1>
            </Wrapper>
           </div>
        );
    }
}

export default Home;
