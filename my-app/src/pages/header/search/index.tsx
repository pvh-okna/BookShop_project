import React from 'react';
import {IconSearch, InputSearch, WrapperSearch } from './style';

const Search = () => {
    return (
        <>
         <WrapperSearch>
             <InputSearch placeholder={'Search'}/>
             <IconSearch/>

         </WrapperSearch>
        </>
    );
};

export default Search;