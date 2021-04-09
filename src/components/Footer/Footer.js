import React from 'react';
import {Link} from 'react-router-dom';
import {Footers, FooterPagination, FooterSub, FooterCopy, FooterSocmed} from './FooterElements';

function Footer() {
    return (
        <Footers>
            <FooterPagination>
                <ul>
                    <li>Airbnb</li>
                    <li>Stays</li>
                    <li>Philippines</li>
                </ul>
            </FooterPagination>
            <FooterSub>
                <FooterCopy>
                    <p>© 2021 Airbnb, Inc. All rights reserved</p>  
                    <ul>
                        <li>
                            <Link to="./privacy">
                            Privacy
                            </Link>
                        </li>
                        <li>
                            <Link to="./terms">
                            Terms
                            </Link>
                        </li>
                        <li>
                            <Link to="./site_map">
                            Site Map
                            </Link>
                        </li>
                    </ul>
                </FooterCopy>
                <FooterSocmed>
                    <ul>
                        <li><i class='bx bxl-facebook'></i></li>
                        <li><i class='bx bxl-twitter' ></i></li>
                        <li><i class='bx bxl-instagram-alt' ></i></li>
                    </ul>
                </FooterSocmed>
            </FooterSub>
        </Footers>
    )
}

export default Footer
