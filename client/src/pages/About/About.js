import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper"
import Logo from "../../components/Logo"
import AboutComp from "../../components/About"

class About extends Component {
    render() {
        return(
           <div>
            <Nav />
            <Wrapper>
            <Logo />
            <AboutComp />
            </Wrapper>
           </div>
        );
    }
}

export default About;
