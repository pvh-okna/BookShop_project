import React, {useState} from 'react';
import {IconSearch, InputSearch, WrapperSearch } from './style';

const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <>
         <WrapperSearch>
             <InputSearch placeholder={'Search'} onChange={(e) => setSearch(e.target.value)}/>
             <IconSearch/>

         </WrapperSearch>
        </>
    );
};

export default Search;