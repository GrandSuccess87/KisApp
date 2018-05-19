import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Form from "../../components/Form";
import Footer from "../../components/Footer";


class Home extends Component {
    
    state = {
        isLoggedIn: false,
        loggedInAs: ""
        };

    logUserIn = () => {
        this.setState({isLoggedIn:true})
    };

    logUserOut = () => {
        this.setState({isLoggedIn:false})
    };

    setName = (name) => {
        this.setState({loggedInAs:name})
    }

    render() {
        return(
           <div>
           <Nav 
            log={this.state.isLoggedIn}
            logIn={this.logUserIn}
            logOut={this.logUserOut}
            logName={this.state.loggedInAs}
            setName={this.setName}
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
