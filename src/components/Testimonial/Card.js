import React from 'react';
import {Cards, 
    CardImage, 
    CardRating, 
    CardDesc, 
    CardProfile, 
    CardProfileImg, 
    CardProfileDesc} from './CardsElements'

function Card(props) {
    return (
        <Cards>
            <CardImage>
                <img src={props.guestrent} alt=""/>
            </CardImage>
            <CardRating>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>   
            </CardRating>
            <CardDesc>

            </CardDesc>
            <CardProfile>
                <CardProfileImg>
                    <img src={props.guestpic} alt=""/>
                </CardProfileImg>
                <CardProfileDesc>
                    {props.guestname} <br/> {props.country}
                </CardProfileDesc>
            </CardProfile>
        </Cards>
    )
}

export default Card
