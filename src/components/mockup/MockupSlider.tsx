import React from 'react';
import Slider from 'react-slick'
import Card from '../Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider: https://react-slick.neostack.com/

const MockupSlider = () => {

    var settings = {
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <Slider {...settings} >
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
            <div className="pt-10"><Card/></div>
        </Slider>
    )
};

export default MockupSlider;