import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../../pages/home';
import Main from "../../pages/main";
import Registration from "../../pages/registration";
import Layout from "../layout";

const RouterElement = () => {
    return (
        <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'registration'} element={<Registration/>}/>
        </Routes>
    );
};

export default RouterElement;
