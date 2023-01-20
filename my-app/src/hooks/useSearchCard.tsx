import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { CardsHomeType } from "../type";


export const useSearchCards = () => {

    const query = useLocation().search;
    const [cards, setCards] = useState<CardsHomeType>()
    const [page, setPage] = useState(1)

    const URLSearchCards = `https://api.itbook.store/1.0/search/${query.substring(1)}`;

    useEffect(() => {

        fetch(URLSearchCards)
            .then(res => res.json())
            .then((data) =>  setCards(data))
            .catch(err => console.log(err))
    }, [URLSearchCards, query, page])

    return {cards, page, setPage}
}