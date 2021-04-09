import React from 'react';
import {
    HeroSection,
    HeroContainer,
    HeroWrapper,
    HeroForm,
    HeroFormTitle,
    InputWrap,
    InputCon,
    Label,
    Input,
    Select
    ,ButtonSearch
    ,HeroDiscount
    , Button} from './HeroElements'


function Hero() {
    return (
        <HeroSection>
            <HeroContainer>
               <HeroWrapper>
                  <HeroForm>
                  <HeroFormTitle>
                        <h1>Find places to stay in Philippines on Airbnb</h1>
                        <p>Discover entire homes and private rooms perfect for any trip</p>
                  </HeroFormTitle>
                    <form action="">
                        <InputWrap>
                            <InputCon>
                                <Label htmlFor="">LOCATION</Label>
                                <Input type="text" placeholder="Philippines"/>
                            </InputCon>
                        </InputWrap>
                        <InputWrap>
                            <InputCon>
                                <Label htmlFor="">CHECK IN</Label>
                                <Input placeholder="Add Date" type="text"  id="date"/>
                            </InputCon>
                            <InputCon>
                                <Label htmlFor="">CHECK OUT</Label>
                                <Input placeholder="Add Date" type="text"  id="date"/>
                            </InputCon>
                        </InputWrap>
                        <InputWrap>
                            <InputCon>
                          
                                <Label htmlFor="">ADULTS</Label>
                                <Select>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </Select>
                            </InputCon>
                            <InputCon>
                                <Label htmlFor="">CHILDREN</Label>
                                <Select>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </Select>
                            </InputCon>
                            
                       
                        </InputWrap>
                        <ButtonSearch>
                                <Button>Search</Button>
                        </ButtonSearch>
                    </form>
                    </HeroForm> 
                    <HeroDiscount>
                        <p>Earn up to P26,967/month hosting your place in Nueva Ecija</p>
                        <div className="become_host">
                            <p>Become a host</p>
                        </div> 
                    </HeroDiscount>
                </HeroWrapper> 
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
