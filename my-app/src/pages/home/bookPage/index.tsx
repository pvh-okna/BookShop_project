import React from 'react';
import { GetCard } from '../../../data/getCard';
import {useNavigate, useParams} from "react-router-dom";
import {ArrowLeft, BookDescription, BookImg, BookInform, BookParamts, BookPrice, BookValue, BtnPreview, BtnShop, WrapperBookBlock,
    WrapperBookImg, WrapperBookPage, WrapperBookParamets } from './style';
import Title from '../../../components/title';

const BookPage = () => {
    const routeParams = useParams()
    const bookId = Number(routeParams.isbn13)
    const bookArr = GetCard(bookId)
    const navigate = useNavigate()
    return (
        <> <ArrowLeft  onClick={()=>navigate('/')}/>
            <WrapperBookPage>

                <WrapperBookBlock>
                    <Title name={bookArr.items?.title}/>
                    <WrapperBookImg>
                        <BookImg src={bookArr.items?.image}/>
                    </WrapperBookImg>
                    <BookInform>
                        <BookPrice>{bookArr.items?.price}</BookPrice>
                       <WrapperBookParamets>

                           <BookParamts>
                               <p>Authors</p>
                               <p>Publisher </p>
                               <p>Language</p>
                               <p>Format</p>

                           </BookParamts>
                           <BookValue>

                               <p>{bookArr.items?.authors}</p>
                               <p>{bookArr.items?.publisher}</p>
                               <p> {bookArr.items?.language}</p>
                               <p> Paper book / ebook (PDF)</p>
                           </BookValue>

                       </WrapperBookParamets>

                    </BookInform>

                    <BtnShop>ADD TO CART</BtnShop>

                    <BtnPreview>Preview book</BtnPreview>

                    <BookDescription>
                        <p>Description</p>
                        {bookArr.items?.desc}
                    </BookDescription>

                </WrapperBookBlock>

            </WrapperBookPage>
        </>


    );
};

export default BookPage;