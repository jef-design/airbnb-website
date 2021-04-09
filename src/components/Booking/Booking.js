import React from 'react'
import {BookingSection, BookingHeader, BookingWrapper, Button, TravelContainer} from './BookingElements';
import BookCard from './BookCard';


function Booking() {
    return (
        <BookingSection>
            <BookingHeader>
                <h3></h3>
            </BookingHeader>
            <BookingWrapper>
                 <BookCard guestrent="https://a0.muscache.com/im/pictures/907f2cd7-26f2-442a-b723-87f37250d2fb.jpg?im_w=480" 
               bookdesc="Stunning Makati Wood House" bookprice="₱2,644 / night" />

               <BookCard guestrent="https://a0.muscache.com/im/pictures/98811672/5030cb3d_original.jpg?im_w=480"
               bookdesc="All incl. Palawan Ecolodge " bookprice="₱2,644 / night" />

               <BookCard guestrent="https://a0.muscache.com/im/pictures/6b664c62-abe5-4cfb-ac2a-87222237ade3.jpg?im_w=480"
               bookdesc="Luxury Villa Busay" bookprice="₱8,569 / night" />

               <BookCard guestrent="https://a0.muscache.com/im/pictures/22435b63-1ea1-4250-b6dc-8375f0042450.jpg?im_w=480"
               bookdesc="Maya Maya RestHouse" bookprice="₱5,050 / night" />
            </BookingWrapper>
            
            <Button >Show (2000+)</Button>
            
            <TravelContainer>
            <h2>
                    When are you traveling?
                    </h2>
                    <p>
                    Add dates for updated pricing and availability
                    </p>
                    <Button primary>
                        Add Date
                    </Button>
            </TravelContainer>
        </BookingSection>
    )
}

export default Booking
