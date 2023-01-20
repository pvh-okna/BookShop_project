import React, {FC} from 'react';
import {ItemsType} from '../../type';
import {
    CardBlock,
    CardDescription,
    CardImg,
    CardInfo,
    CardTitle,
    WrapperCard
} from "./style";
import {useNavigate} from "react-router-dom";
import {useThemeSelector} from "../../redux/rootReducer";


type CardType = {
    props: ItemsType
}

const Book: FC<CardType> = ({props}) => {
    const selectTheme = useThemeSelector(state => state.themeReducer);
    const navigate = useNavigate()
    const clickCard = (id:string) => {
        navigate(`/books/${id}`)
        window.scroll({top: 0})
    }

    return (
        <WrapperCard>
            <CardBlock props={selectTheme} id={String(props.isbn13)} onClick={() => clickCard(props.isbn13)}>
                <CardImg image={props.image}>
                </CardImg>
                <CardInfo props={selectTheme}>
                    <CardTitle props={selectTheme}>{props.title}</CardTitle>
                    <CardDescription  props={selectTheme}>
                            <p>{props.subtitle}</p>
                            <span>{props.price}</span>
                    </CardDescription>
                </CardInfo>
            </CardBlock>
        </WrapperCard>
    );
};

export default Book;