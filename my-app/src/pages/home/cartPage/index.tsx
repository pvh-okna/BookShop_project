import React from 'react';
import LittleCard from "../../../components/littleCard";
import { Amount, BtnChek } from './style';
import {useThemeSelector} from "../../../redux/rootReducer";
import { TitleWrapper } from '../allCards/style';
import {ArrowLeft} from "../bookPage/style";
import {useNavigate} from "react-router-dom";

const CartPage = () => {
    const login = JSON.parse(localStorage.getItem('loggedin') || '')
    const selectTheme = useThemeSelector(state => state.themeReducer);
    const navigate = useNavigate()

    if(login){
        let cardArr = JSON.parse(localStorage.getItem('cart') || '');
            let amount:number=0;
            for(let key in cardArr){
                amount= amount+Number(cardArr[key].price.substring(1))
            }
            return(
                <>
                    <ArrowLeft props={selectTheme} onClick={()=>navigate('/')}/>
                    <TitleWrapper props={selectTheme}>Your cart</TitleWrapper>
                    {cardArr.map(((card: any) => <LittleCard props={card} key={card.id}/>))}
                    <Amount props={selectTheme}>TOTAL&ensp;:&emsp;&emsp;  ${amount.toFixed(2)}</Amount>
                    <BtnChek props={selectTheme} onClick={()  => alert('Order payment')}>check out</BtnChek>

                </>
            )



        }else return (

            <TitleWrapper  props={selectTheme} onClick={() => {navigate('/registration')}}>you need to sign up or sign in</TitleWrapper>
    )





};

export default CartPage;