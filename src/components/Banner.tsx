import React from 'react';
import Button, { ButtonVariantTypes } from './Button';

interface BannerProps{
    backgroundImg: string, 
    label: string
}

const Banner = (props: BannerProps) => {

    let mycss = {
        background: `linear-gradient(0deg, rgb(29,29,29) 0%, rgba(29,29,29,0) 100%), url(${props.backgroundImg}) no-repeat`,
        // background: `linear-gradient(0deg, rgb(29,29,29) 0%, rgba(29,29,29, 0.95) 18%, rgba(29,29,29,0.6) 41%, rgba(29,29,29,0.4) 61%, rgba(29,29,29,0) 100%), url(${props.backgroundImg}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="relative ">
           <div className="w-full h-screen bg-fixed bg-center grid content-center" style={mycss}>
           {/* <div className="w-full h-screen bg-cover bg-fixed bg-center grid content-center bg-gradient-to-t from-dark" style={{backgroundImage: `url(${props.backgroundImg})`, }}> */}
               <div className="pl-10 lg:pl-28 py-5 bg-grey-dark/[.7] w-3/4 sm:w-1/2 lg:w-5/12">
                    <h1 className="text-6xl lg:text-8xl text-white font-times font-bold " style={{textShadow: '3px 9px 11px #0F0402', }}>{props.label}</h1>
                    <div className="mt-10">
                        <Button variant={ButtonVariantTypes.big} text={'Guarda ora'} url="/theoplayer"/>
                    </div>
               </div>
             </div>
         </div>
    )
};

export default Banner;