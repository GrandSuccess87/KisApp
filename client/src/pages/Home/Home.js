import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Form from "../../components/Form";
import Footer from "../../components/Footer";


class Home extends Component {
    
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
            <Form log={this.state.isLoggedIn}/>

            </Wrapper>
            <Footer />
           </div>
        );
    }
};


export default Home;
