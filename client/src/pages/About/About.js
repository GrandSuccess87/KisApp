import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper"
import Logo from "../../components/Logo"




class About extends Component {


    render() {
        return(
           <div>
            <Nav />
            <Wrapper>
            <Logo />
            <h1>Theres nothing on this About page! Be Patient!</h1>
            </Wrapper>
           </div>
        );
    }
}


export default About;
