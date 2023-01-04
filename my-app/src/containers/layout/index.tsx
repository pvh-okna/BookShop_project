import React from 'react';
import { GlobalStyle } from '../../assets/styles';
import Header from '../../pages/header';
import Footer from "../../pages/footer";
import Main from '../../pages/main';
import RouterElement from "../router";

const Layout = () => {
    return (
        <>
           <Header/>
            <GlobalStyle/>
            <Main>
                <RouterElement/>
            </Main>


            <Footer/>
        </>
    );
};

export default Layout;