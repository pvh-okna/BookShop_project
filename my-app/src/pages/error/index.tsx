import React from 'react';
import { TitleWrapper } from '../home/allCards/style';
import {useThemeSelector} from "../../redux/rootReducer";

const ErrorPage = () => {

    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <>
            <TitleWrapper props={selectTheme} >Page Is Not Found</TitleWrapper>
            <TitleWrapper props={selectTheme} >Please, Try Again!</TitleWrapper>
        </>
    )


};

export default ErrorPage;

