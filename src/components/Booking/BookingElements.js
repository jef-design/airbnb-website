import styled from 'styled-components';

export const BookingSection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    
    @media screen and (max-width: 744px){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
   
}
`
export const BookingHeader = styled.div`
     margin-bottom: 24px;
        h3{
            font-size: 26px;
            line-height: 30px;
            color: #222222;
        }
`
export const BookingWrapper = styled.div`
    display: flex;
    gap: 1em;

@media screen and (max-width: 1127px){
    flex-wrap: wrap;

    
}
`
export const BookPrice = styled.div`

`

export const Button = styled.div`
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    padding: 13px 23px;
    cursor: pointer;
    border-style: solid;
    outline: none;
    border: none;
    border:1px solid #222222;
    color: ${props => props.primary ? "#fff" : "black"};
    background-color: ${props => props.primary ? "#222222" : "#fff"};

    &:hover{
        opacity: 0.9;
    }


@media screen and (max-width: 744px){
        width: 100%;
    }
`

export const TravelContainer = styled.div`
    margin-bottom: 50px;
    h2{
        font-size: 26px;
        line-height: 30px;
    }
    p{
        color: #767676;
        font-size: 16px;
        line-height: 20px;
    }
`

