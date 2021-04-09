import styled from 'styled-components';

export const HeroSection = styled.section`
    background-image: url(https://a0.muscache.com/im/pictures/5998210c-3dd8-456a-8805-2a044ede1d5e.jpg?im_w=1200);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

`;

export const HeroContainer = styled.div`
    position: relative;
    width: 1250px;
    height: auto;
    padding-top: 80px;
    margin-bottom: 40px;
    display: flex;

@media screen and (max-width:744px){
    background-color: white;
    margin-bottom: 0;
}

`;
export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const HeroForm = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 32px;
    width: 510px;
@media screen and (max-width:744px){
    width: 100%
}

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`;

export const HeroFormTitle = styled.div`
    h1{
        font-size: 2rem;
        margin: 0;
    }
    p{
    font-size: 16px;
    color: #767676;
    }

`;

export const InputWrap = styled.div`
    display: flex;
    width: 100%;
    position: relative;

`;

export const InputCon = styled.div`
    box-shadow: #DDDDDD 0 0 0 1px inset;
    border-radius: 8px;
    padding: 8px 16px;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
        &:not(:last-child)
        {
            margin-right: 7px;
        }

`;

export const Label = styled.label`
    font-size: 10px;
    font-weight: 600;
`
export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
`
export const Select = styled.select`
    border: none;
    outline: none;
    background-color: white;
`
export const ButtonSearch = styled.div`

`
export const Button = styled.button`
   width: 100%;
   background-image: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%); 
   padding: 14px 24px;
   text-align: center;
   color: #ffffff;
   border-radius: 8px;
   border: none;
   outline: none;
   margin-top: 10px;
   cursor: pointer;
`

export const HeroDiscount = styled.div`
    background-color: white;
    border-radius: 12px;
    padding:32px;
    width: 510px;
    height: 36px;
    margin-top: 10px;
    display: flex;
    align-items: center;

@media screen and (max-width:744px){
    width: 100%;
    margin: 0;
}
`