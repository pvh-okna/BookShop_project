import React from 'react';
import Book from '../../../components/cardBook';
import { useGetAllCard } from '../../../hooks/useAllCard';
import {TitleWrapper, WrapperCards } from './style';
import {useThemeSelector} from "../../../redux/rootReducer";
import { ItemsType } from '../../../type';


const AllCards = () => {
    const booksArray = useGetAllCard()
    const selectTheme = useThemeSelector(state => state.themeReducer);
    if (booksArray.error) {
        // @ts-ignore
        return <div>Ошибка: {booksArray.error.message}</div>;
    } else if (!booksArray.isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
              <TitleWrapper props={selectTheme}>New Releases Books</TitleWrapper>
                <WrapperCards>

                    {booksArray.items.map(((card: ItemsType) => <Book props={card} key={card.isbn13}/>))}
                </WrapperCards>
            </>
        );
    }
}

export default AllCards;