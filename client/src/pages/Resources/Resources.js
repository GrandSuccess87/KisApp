import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo";
import InfoLinks from "../../components/InfoLinks";
import Footer from "../../components/Footer";


class ResourcesPage extends Component {

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
            <InfoLinks />
            </Wrapper>
            <Footer />
           </div>
        );
    }
};

export default ResourcesPage;
