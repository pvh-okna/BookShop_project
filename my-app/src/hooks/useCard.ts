import {useEffect, useState} from "react";
import {CardType} from "../type";

export const UseCard = (id:number) => {


    const [items, setItems] = useState<CardType>();

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${id}`)
            .then(res => res.json())
            .then(
                (data) => {
                    setItems(data);
                }
            )
    }, [])
    return{ items};
}