import React from 'react';
import {  Wrapper } from './style';
import {useNavigate} from "react-router-dom";
import {useThemeSelector} from "../../../redux/rootReducer";

const Logo = () => {
    const navigate = useNavigate();
    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <>

           <Wrapper props={selectTheme} onClick={()=>navigate('/')}>BOOKSTORE</Wrapper>
        </>
    );
};

export default Logo;