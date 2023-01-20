import React from 'react';
import { WrapperTitle } from './style';
import {useThemeSelector} from "../../redux/rootReducer";

const Title = (props:any) => {
    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <WrapperTitle props={selectTheme}>{props.name}</WrapperTitle>
    );
};

export default Title;