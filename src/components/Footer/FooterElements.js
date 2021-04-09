import styled from 'styled-components';

export const Footers = styled.section`
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 1200px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    @media screen and (max-width: 744px){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
   
}
`
export const FooterPagination = styled.div`
     ul{
        display: flex;
        padding-left: 0;
        li{
            &:not(:last-child)
            {
                margin-right: 20px;
            }
        }
    }
`
export const FooterSub = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #DDDD;
    color: #222222;

    @media (max-width: 1127px){
    
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        text-align: center;
}
`
export const FooterCopy = styled.div`
    border-top: 1px solid #DDDD;
    display: flex;
    ul{
        display: flex;
        
        li{
            margin-right: 20px;
            list-style: disc;
            a{
                text-decoration: none;
                color: #222222;
            }
            &:hover{
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 1127px){

            flex-direction: column;
        
    
}
`
export const FooterSocmed = styled.div`
    ul{
        display: flex;
        padding-left: 0;
        li{
            i{
                font-size: 25px;
            }
            &:not(:last-child)
            {
                margin-right: 20px;
                
            }
        }
    }
`
