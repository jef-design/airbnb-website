import React from 'react';
import {BannerSection,BannerContainer, Bannerh1, BannerP,BannerBtn} from './BannerElements'

function Banner() {
    return (
        <BannerSection>
            <BannerContainer>
                <Bannerh1>Go Near</Bannerh1>
                <BannerP>Settle in somewhere new. Discover stays to live, work, or just relax.</BannerP>
                <BannerBtn>Explore nearby</BannerBtn>
            </BannerContainer>
        </BannerSection>
    )
}

export default Banner

