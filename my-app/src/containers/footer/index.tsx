import React from 'react';
import {RightsFooter, WrapperFooter, YearFooter } from './style';

const Footer = () => {
    return (
        <WrapperFooter>
            <YearFooter>©2022 Bookstore</YearFooter>
            <RightsFooter>All rights reserved</RightsFooter>
        </WrapperFooter>
    );
};

export default Footer;