import styled from 'styled-components';

export const BannerSection = styled.section`
    background-image: url(https://a0.muscache.com/im/pictures/5ce840f1-98dd-42bf-9c26-c5fe8c3ff767.jpg?im_w=960);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: start;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 8px;
    height: auto;

@media screen and (max-width: 744px){
 
    justify-content: center;
    height: 500px;
    background-position: center;
    background-size: cover;
    border-radius: 0;
    margin-top: 0;
        
    
}
`

export const BannerContainer = styled.div`
    font-weight: 700;
    padding: 40px;
    text-align: left;
    max-width: 300px;

 @media screen and (max-width: 744px){
 
    text-align: center;
 

}
`
export const Bannerh1 = styled.h1`
    font-size: 32px;
    line-height: 36px;
    color: #ffffff;`

export const BannerP = styled.p`
    color: #ffffff;`

export const BannerBtn = styled.button`
    display: inline-block ;
    background-color: #FFFFFF;
    padding: 8px 16px ;
    border-radius: 8px ;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
    color: #484848;
`