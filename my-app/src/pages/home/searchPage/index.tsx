import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Search from "../../header/search";

export const SearchResults = () => {

    const handleEnter = (search:string) => {
        if (search.trim() === "") return;

        fetch(`https://api.itbook.store/1.0/search/${search}`)
            .then(response => response.json())
            .then(data => {
                useState({movies: data.Search})
                console.log(data);
            });
    }

return(
    <>
    <Search  />

    </>


)
}