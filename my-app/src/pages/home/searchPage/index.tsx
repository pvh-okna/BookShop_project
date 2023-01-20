import React, {useState} from "react";
import { useSearchCards } from "../../../hooks/useSearchCard";
import Book from "../../../components/cardBook";
import {TitleWrapper, WrapperCards } from "../allCards/style";
import Title from "../../../components/title";
import {useLocation} from "react-router-dom";
import { Pagination } from "../../../components/pagination";
import {useThemeSelector} from "../../../redux/rootReducer";

export const SearchPage = () => {

    const [force, setForce] = useState(0)
    const searchCards = useSearchCards()
    const query = useLocation().search
    const changePage = (e: { selected: number }) => {
        searchCards.setPage(e.selected + 1)
        window.scroll({top: 0})
        setForce(e.selected)
    }
    const selectTheme = useThemeSelector(state => state.themeReducer);

    let totalBooks = Number (searchCards.cards?.books.length)

    return (
        <>
            <TitleWrapper props={selectTheme}>'{query.substring(1)}' Search results</TitleWrapper>
            <WrapperCards>

                { searchCards.cards?.books.map((card:any) =>  <Book props={card} key={card.isbn13}/>)}

            </WrapperCards>
    <Pagination pageCount={Number(searchCards.cards?.page)} forcePage={force} changePage={changePage}/>
</>
);


}