import React from 'react';
import { UseCard } from '../../../hooks/useCard';
import {useNavigate, useParams} from "react-router-dom";
import {ArrowLeft, BookDescription, BookImg, BookInform, BookParamts, BookPrice, BookValue, BtnPreview, BtnShop, WrapperBookBlock,
    WrapperBookImg, WrapperBookPage, WrapperBookParamets } from './style';
import Title from '../../../components/title';
import {useThemeSelector} from "../../../redux/rootReducer";
import littleCard from "../../../components/littleCard";

type LittleBookType = {
    title:string,
    price:string,
    image:string,
    id:string
}


const BookPage = () => {
    const routeParams = useParams()
    const bookId = Number(routeParams.isbn13)
    const bookArr = UseCard(bookId)
    const navigate = useNavigate()
    const selectTheme = useThemeSelector(state => state.themeReducer);
    let littleBook:any={};
    let localBook:LittleBookType[]=[];
   const AddCart = (e:any) => {
       const login = JSON.parse(localStorage.getItem('loggedin') || '')

       if(login){
         localBook=JSON.parse(localStorage.getItem('cart') || '')
         littleBook.id=e.target.id
         littleBook.title=e.target.title;
         littleBook.image= e.target.name;
         littleBook.price=e.target.value
         localBook.push(littleBook)
         localStorage.setItem("cart", JSON.stringify(localBook))

        }
   }


    return (
        <> <ArrowLeft props={selectTheme} onClick={()=>navigate('/')}/>
            <WrapperBookPage>

                <WrapperBookBlock>
                    <Title name={bookArr.items?.title}/>
                    <WrapperBookImg>
                        <BookImg src={bookArr.items?.image}/>
                    </WrapperBookImg>
                    <BookInform>
                        <BookPrice props={selectTheme}>{bookArr.items?.price}</BookPrice>
                       <WrapperBookParamets>

                           <BookParamts props={selectTheme}>
                               <p>Authors</p>
                               <p>Publisher </p>
                               <p>Language</p>
                               <p>Format</p>

                           </BookParamts>
                           <BookValue props={selectTheme}>

                               <p>{bookArr.items?.authors}</p>
                               <p>{bookArr.items?.publisher}</p>
                               <p> {bookArr.items?.language}</p>
                               <p> Paper book / ebook (PDF)</p>
                           </BookValue>

                       </WrapperBookParamets>

                    </BookInform>

                    <BtnShop id={bookArr.items?.isbn13}
                             title={bookArr.items?.title}
                             name={bookArr.items?.image}
                             value={bookArr.items?.price}

                             props={selectTheme}
                             onClick={(e) => {AddCart(e)
                             }}
                    >ADD TO CART</BtnShop>

                    <BtnPreview>Preview book</BtnPreview>

                    <BookDescription props={selectTheme} >
                        <p>Description</p>
                        {bookArr.items?.desc}
                    </BookDescription>

                </WrapperBookBlock>

            </WrapperBookPage>
        </>


    );
};

export default BookPage;