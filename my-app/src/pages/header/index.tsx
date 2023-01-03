import React from 'react';
import Logo from "./logo";
import Menu from './menu';
import Search from "./search";
import { WrapperHeader } from './style';

const Header = () => {
    return (
        <>
            <WrapperHeader>
                <Logo/>
                <Search/>
                <Menu/>
            </WrapperHeader>
        </>

    );
};

export default Header;