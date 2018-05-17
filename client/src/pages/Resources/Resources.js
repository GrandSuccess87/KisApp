import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo";
import InfoLinks from "../../components/InfoLinks";
import Footer from "../../components/Footer";


class ResourcesPage extends Component {

    render() {
        return(
           <div>
            <Nav />
            <Wrapper>
            <Logo />
            <InfoLinks />
            </Wrapper>
            <Footer />
           </div>
        );
    }
}

export default ResourcesPage;
