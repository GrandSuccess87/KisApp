import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper"
import Logo from "../../components/Logo"



class Resources extends Component {

    render() {
        return(
           <div>
            <Nav />
            <Wrapper>
            <Logo />
            <Resources />
            </Wrapper>
           </div>
        );
    }
}


export default Resources;
