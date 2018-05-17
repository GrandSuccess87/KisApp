import React, {Component} from 'react';
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Form from "../../components/Form";
import Footer from "../../components/Footer"


class Home extends Component {

    render() {
        return(
           <div>
           <Nav />
            <Wrapper>
            <Logo />
            <Form />

            </Wrapper>
            <Footer />
           </div>
        );
    }
}


export default Home;
