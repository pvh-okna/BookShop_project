import React, {FC, useEffect} from 'react';
import { ItemsType} from '../../type';
import {useThemeSelector} from "../../redux/rootReducer";
import {useNavigate} from "react-router-dom";
import {BtnDelete, LittleCardBlock, LittleCardImg, LittleCardPrice, LittleCardTitle, WrapperLittleCard } from './style';
type CardType = {
    props: ItemsType
}

const LittleCard: FC<CardType> = ({props}) => {
    const selectTheme = useThemeSelector(state => state.themeReducer);
    const navigate = useNavigate()
    const clickCard = (id:any) => {
        navigate(`/books/${id}`)
        window.scroll({top: 0})
    }

    const deleteCart = (e: any)=>{
        let cardArr = JSON.parse(localStorage.getItem('cart') || '');
        let deleteId = e.target.parentElement.id;
        const result = cardArr.filter((item:ItemsType )=> item.id != deleteId)
        localStorage.setItem("cart", JSON.stringify(result));
        alert('Update page')
    }

    return (
        <>
            <WrapperLittleCard id={props.id}>
                <LittleCardBlock props={selectTheme}>
                    <LittleCardImg image={props.image}  onClick={() => clickCard(props.id)}/>
                    <LittleCardTitle props={selectTheme}  onClick={() => clickCard(props.id)}>{props.title}</LittleCardTitle>
                    <LittleCardPrice props={selectTheme}>{props.price}</LittleCardPrice>
                </LittleCardBlock>
                <BtnDelete  props={selectTheme} onClick={(e) => {deleteCart(e)}}/>
            </WrapperLittleCard>
        </>
    );
};

export default LittleCard ;