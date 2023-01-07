import React from 'react';
import Book from '../../../components/cardBook';
import { useGetAllCard } from '../../../data/getAllCard';
import { WrapperCards } from './style';


const AllCards = () => {
    const booksArray = useGetAllCard()


    if (booksArray.error) {
        // @ts-ignore
        return <div>Ошибка: {booksArray.error.message}</div>;
    } else if (!booksArray.isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <WrapperCards>
                    {booksArray.items.map(((card: any) => <Book props={card} key={card.isbn13}/>))}
                </WrapperCards>
            </>
        );
    }
}

export default AllCards;