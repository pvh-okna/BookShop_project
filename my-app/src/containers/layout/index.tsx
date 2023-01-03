import React from 'react';
import { GlobalStyle } from '../../assets/styles';
import Header from '../../pages/header';
import Footer from "../../pages/footer";
import Main from '../../pages/main';

const Layout = () => {
    return (
        <>
            <Header/>
            <GlobalStyle/>
            <Main/>
            {/*    hjj*/}
            {/*    /!*<RouteComponent/>*!/*/}
            {/*</Main>*/}

            <Footer/>
        </>
    );
};

export default Layout;