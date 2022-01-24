import React from 'react';
import FooterFull from './FooterFull';
import FooterSmall from './FooterSmall';


const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="hidden md:block">
                <FooterFull/>
            </div>
            <div className="block md:hidden">
                <FooterSmall/>
            </div>
        </div>
    )
};

export default Footer;