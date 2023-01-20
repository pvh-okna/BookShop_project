import {useEffect, useState} from "react";
import { ItemsType } from "../type";

export const useGetAllCard = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<ItemsType[]>([]);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data.books);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return{ error,items, isLoaded};
}