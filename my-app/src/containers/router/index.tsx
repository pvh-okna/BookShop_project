import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../../pages/home';
import Registration from "../../pages/registration";
import Layout from "../layout";
import BookPage from "../../pages/home/bookPage";
import {SearchResults} from "../../pages/home/searchPage";

const RouterElement = () => {
    return (
        <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'books/:isbn13'} element={<BookPage/>}/>
                <Route path={'/search/:query'} element={<SearchResults/>}/>
        </Routes>
    );
};

export default RouterElement;
