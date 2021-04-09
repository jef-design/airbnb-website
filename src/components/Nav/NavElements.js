import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.224) 0%, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.224) 0%, rgba(0, 0, 0, 0) 100%);
    color: white;
    height: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`
export const NavLogo = styled.div `
    display: flex;
    align-items: center;
    z-index: 1;
`

export const NavMenu = styled.ul`
    display: flex;
        font-weight: 600;
        font-size: $fontNormal;
        li{
            z-index: 1;
            &:not(:last-child){
                margin-right: 20px;
            }
            a{
                text-decoration: none;
                color: inherit;
            }
        }

 @media screen and (max-width: 744px){     
    li{
    &:nth-child(1){
        display: none;
    }
    &:nth-child(2){
        display: none;
    }
    z-index: 1;
    &:not(:last-child){
        margin-right: 20px;
    }
    a{
        text-decoration: none;
        color: #222222;
    }
}



}   
`;
