import React from 'react';
import {Cards, CardImage,CardDesc, BookPrice} from '../Testimonial/CardsElements';

function BookCard(props) {
    return (
        <Cards>
            <CardImage>
                <img src={props.guestrent} alt=""/>
            </CardImage>
            <CardDesc>
                {props.bookdesc}
                <BookPrice>
                    {props.bookprice}
                </BookPrice>
            </CardDesc>
        </Cards>
    )
}

export default BookCard