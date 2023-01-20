import React, { useState } from 'react';
import Logo from "./logo";
import Menu from './menu';
import Search from "./search";
import { WrapperHeader } from './style';
import {Switcher} from "../../assets/theme";
import {useThemeSelector} from "../../redux/rootReducer";


const Header = () => {
    const selectTheme = useThemeSelector(state => state.themeReducer);
    const [stateSearch, setStateSearch] = useState(false)

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keywordValue') || ''
    const [itemSearch, setItemSearch] = useState(keywordParams)

    const submitBtnItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setItemSearch(e.target.value)
    }
    return (
        <>
            <WrapperHeader props={selectTheme}>
                <Logo/>
                <Search setStateSearch={setStateSearch}
                        itemSearch={itemSearch}
                        submitBtnValue={submitBtnItem}
                />
                <Menu/>
                <Switcher/>
            </WrapperHeader>
        </>

    );
};

export default Header;