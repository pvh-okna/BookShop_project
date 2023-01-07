import React from 'react';
import { IconFavorite, IconShoppingBag, IconUser, WrapperMenu } from './style';
import {useNavigate} from "react-router-dom";



const Menu = () => {
    const navigate = useNavigate()

    return (
        <WrapperMenu>
           <IconFavorite/>
            <IconShoppingBag/>
            <IconUser onClick={() => navigate('registration')}/>
        </WrapperMenu>
    );
};

export default Menu;