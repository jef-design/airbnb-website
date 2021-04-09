import styled from 'styled-components';


export const TestimonialSection = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    @media screen and (max-width: 744px){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
   
}
`
export const TestimonialHeader = styled.div`
    margin-bottom: 20px;
`
export const TestimonialH1 = styled.h1`
    margin-bottom: 20px;
`
export const TestimonialP = styled.p`
    margin-bottom: 20px;
`
export const Slider = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    overflow-y: scroll;
        -webkit-overflow-scrolling: smooth;

            &::-webkit-scrollbar {
            display: none;
            }
            
    
`
export const SliderWrapper = styled.div`
    display: flex;
    // gap: 1.2em;
    width: 100%;
    height: auto;
    transition: 0.5s ease;

    @media screen and (max-width: 1128px){
        width: 400%;
        
    
 }
`