import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo";
import AboutComp from "../../components/About";
import Footer from "../../components/Footer";


class About extends Component {
    state = {
        isLoggedIn: false
        };

    logUserIn = () => {
        this.setState({isLoggedIn:true})
    };

    logUserOut = () => {
        this.setState({isLoggedIn:false})
    };


    render() {
        return(
           <div>
            <Nav 
            log={this.state.isLoggedIn}
            logIn={this.logUserIn}
            logOut={this.logUserOut}
           />
            <Wrapper>
            <Logo />
            <AboutComp />
            </Wrapper>
            <Footer />
           </div>
        );
    }
};

export default About;
