import React from 'react';

export enum ButtonVariantTypes {
    big = 'big',
    primary = 'primary',
    secondary = 'secondary'    
}

interface ButtonProps{
    text: string, 
    variant: ButtonVariantTypes,
    url?: string
    className? : string
}

const Button = (props: ButtonProps) => {

    let variantClassName = "";
    if(props.variant === ButtonVariantTypes.big){
        variantClassName = "font-bold font-gotham text-lg uppercase py-5 px-8 text-white bg-red shadow-button";
    }
    if(props.variant === ButtonVariantTypes.primary){
        variantClassName = "font-bold font-gotham text-lg uppercase py-2 px-8 text-red border";
    }
    if(props.variant === ButtonVariantTypes.secondary){
        variantClassName = "font-bold font-gotham text-lg uppercase py-2 px-8 text-grey border";
    }    

    return (
        <a href={(props.url) ? props.url : '#'} className={props.className + " "+ variantClassName}>
            <span className="inline-block">{props.text}</span>
        </a>
    )
};

export default Button;