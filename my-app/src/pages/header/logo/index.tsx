import React from 'react';
import {  Wrapper } from './style';
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate()
    return (
        <>

           <Wrapper onClick={()=>navigate('/')}>BOOKSTORE</Wrapper>
        </>
    );
};

export default Logo;