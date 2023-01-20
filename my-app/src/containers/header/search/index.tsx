import React, {Dispatch, FC, SetStateAction} from 'react';
import {IconSearch, InputSearch, WrapperSearch } from './style';
import { useNavigate} from "react-router-dom";

export type SearchInputProps = {
    setStateSearch: Dispatch<SetStateAction<boolean>>,
    submitBtnValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    itemSearch: string
}
const Search:FC<SearchInputProps> = ({setStateSearch, submitBtnValue, itemSearch}) => {

    const navigate = useNavigate()


   const passSearchParams = () => {
        if (itemSearch) {
            navigate({
                pathname: "search",
                search: `${itemSearch}`
            });
        }
    }
    const SearchingBook = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && itemSearch) {
            e.preventDefault()
            e.stopPropagation()
            navigate({
                pathname: `search`,
                search: `${itemSearch}`
            });
        }
    }

    return (
        <>
         <WrapperSearch>
             <InputSearch placeholder={'Search'}
             onKeyDown={SearchingBook}
             onChange={submitBtnValue}
             value={itemSearch}/>
             <IconSearch onClick={passSearchParams}/>
         </WrapperSearch>
        </>
    );
};

export default Search;