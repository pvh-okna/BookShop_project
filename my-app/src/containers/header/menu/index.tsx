import React from 'react';
import { IconShoppingBag, IconUser, WrapperMenu } from './style';
import {useNavigate} from "react-router-dom";
import {useThemeSelector} from "../../../redux/rootReducer";



const Menu = () => {
    const navigate = useNavigate()
    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <WrapperMenu>
            <IconShoppingBag props={selectTheme} onClick={() => navigate('cart')}/>
            <IconUser props={selectTheme} onClick={() => navigate('registration')}/>
        </WrapperMenu>
    );
};

export default Menu;