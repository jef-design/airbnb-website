import React from 'react';
import ServicesItem from './ServicesItem';
import {ServicesSection} from './ServicesElements';

function Services() {
    return (
        <ServicesSection>
            <ServicesItem srvcimage="bx bx-message" srvctitle="24/7 Customer Support"
             srvcdesc="Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day." />

            <ServicesItem srvcimage="bx bx-home" srvctitle="Global Hosting Requirements" 
            srvcdesc="All hosts must meet hosting requirements and maintain a minimum rating to be on Airbnb." />

            <ServicesItem srvcimage="bx bx-star" srvctitle="All Star Host" 
            srvcdesc="From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local hospitality." />
        </ServicesSection>
    )
}

export default Services
