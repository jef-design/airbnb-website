import styled from 'styled-components';

export const ServicesSection = styled.section`
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid #DDDD;
    border-bottom: 1px solid #DDDD;
    padding-left: 2.5rem;
  padding-right: 2.5rem;

@media screen and (max-width: 744px){
    flex-direction: column;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
   
}


`

export const ServicesContainer= styled.div`
    &:not(:last-child){
        margin-right: 35px;
    }
`
export const ServicesIcon = styled.div`
    i{
        font-size: 35px;
    }
`
export const ServicesDesc= styled.div`
    h3{
        font-size: 22px;
        color: #222222; 
    }
    p{
        font-size: 16px;
        color: #222222; 
    }
`
