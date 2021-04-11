import React from 'react';
import {TestimonialSection, 
    TestimonialHeader, 
    TestimonialH1, 
    TestimonialP, 
    Slider, 
    SliderWrapper} from './TestimonialElements';
import {Cards, 
        CardImage, 
        CardRating, 
        CardDesc, 
        CardProfile, 
        CardProfileImg, 
        CardProfileDesc} from './CardsElements'

        
function Testimonial({data}) {
    return (
        <TestimonialSection>
            <TestimonialHeader>
            <TestimonialH1>What guests are saying about homes in Philippines</TestimonialH1>
             <TestimonialP> Over 1,000,000 guest reviews with an average of 4.7 out of 5 stars</TestimonialP>
            </TestimonialHeader>
            <Slider>
                <SliderWrapper>
                    {data.map((testimonial, index) => {
                        return(
                            <Cards key={index}>
                            <CardImage>
                                <img src={testimonial.img} alt=""/>
                            </CardImage>
                            <CardRating>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>   
                            </CardRating>
                            <CardDesc>
                                {testimonial.message}
                            </CardDesc>
                            <CardProfile>
                                <CardProfileImg>
                                    <img src={testimonial.guestimg} alt="Userimage"/>
                                </CardProfileImg>
                                <CardProfileDesc>
                                    {testimonial.name} <br/> {testimonial.country}
                                </CardProfileDesc>
                            </CardProfile>
                        </Cards>
                        )
                    })}
                </SliderWrapper>
            </Slider>
        </TestimonialSection>
    )
}

export default Testimonial

