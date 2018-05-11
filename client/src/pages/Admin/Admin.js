import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper"
import Logo from "../../components/Logo"
import AdminComp from "../../components/Admin"


class Admin extends Component {
    render() {
        return(
        <div>
        <Nav />     
        <Wrapper>
        <Logo />
        <AdminComp />
        </Wrapper>
        </div> 

        );
    }
}

export default Admin;