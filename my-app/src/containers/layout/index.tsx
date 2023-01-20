import React, {useContext} from 'react';
import { GlobalStyle } from '../../assets/styles';
import Header from '../header';
import Footer from "../footer";
import Main from '../../pages/main';
import RouterElement from "../router";
import { useThemeSelector } from '../../redux/rootReducer';



const Layout = () => {
    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <>
           <Header/>
            <GlobalStyle props={selectTheme}/>
            <Main>
                <RouterElement/>
            </Main>


            <Footer/>
        </>
    );
};

export default Layout;