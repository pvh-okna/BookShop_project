import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../../pages/home';
import Registration from "../../pages/registration";
import Layout from "../layout";
import BookPage from "../../pages/home/bookPage";
import { SearchPage } from '../../pages/home/searchPage';
import CartPage from '../../pages/home/cartPage';
import ErrorPage from "../../pages/error";


const RouterElement = () => {
    return (
        <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'books/:isbn13'} element={<BookPage/>}/>
                <Route path={`search`} element={<SearchPage/>}/>
                <Route path={'cart'} element={<CartPage/>}/>
                <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default RouterElement;
