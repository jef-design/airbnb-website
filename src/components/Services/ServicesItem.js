import React from 'react';
import {ServicesContainer, ServicesIcon, ServicesDesc} from './ServicesElements';

function ServicesItem(props) {
    return (
        <ServicesContainer>
            <ServicesIcon>
                <i class={props.srvcimage}></i>
            </ServicesIcon>
            <ServicesDesc>
                <h3>{props.srvctitle}</h3>
                <p>{props.srvcdesc}</p>
            </ServicesDesc>
        </ServicesContainer>
    )
}

export default ServicesItem
