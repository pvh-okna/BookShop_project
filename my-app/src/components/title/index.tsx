import React from 'react';
import { WrapperTitle } from './style';

const Title = (props:any) => {
    return (
        <WrapperTitle>{props.name}</WrapperTitle>
    );
};

export default Title;