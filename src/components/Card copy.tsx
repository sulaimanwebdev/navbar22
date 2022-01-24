import React, { useState } from 'react';
import Image from 'next/image'
import Button, { ButtonVariantTypes } from './Button';
import Link from 'next/link';


// interface CardProps{
//     img: string, 
//     label: string
// }

export default function Card() {

    const [expanded, setExpanded] = useState(false);

    const open = () => setExpanded(true);
    const close = () => setExpanded(false);

    let bannerImg : string = 'https://static.teatroallascala.org/static/upload/syl/sylvia---martina-arduino-claudio-coviello---ph-brescia-e-amisano--teatro-alla-scala.jpg';

    let classes = (expanded) ? "bg-white hover:h-auto hover:scale-105 hover:lg:scale-105 text-gotham border-dark shadow-card-img relative z-10" : "bg-white hover:h-80 hover:scale-105 hover:lg:scale-125 text-gotham border-dark shadow-card-img mx-5 relative z-1";

    return (
        <div className={classes} onMouseEnter={open} onMouseLeave={close} >
            <div className="relative h-60 p-1 border-white border-2">
                <Image src={bannerImg}  layout="fill"/>
            </div>
            <div className="font-bold p-5 bg-white">
                <Link href="/scheda"><h1 className="text-dark text-2xl cursor-pointer">Titolo dell&apos;opera</h1></Link>
                <div className={expanded ? "block bg-white" : "hidden bg-white"} >
                    <p className="text-dark text-md mt-2">opera in due atti</p>
                    <p className="text-dark text-md">Libretto di Felice Romani</p>
                    <p className="text-dark text-md">Nuova produzione Mds</p>

                    <div className="mt-6 text-center pb-5">
                        <Button variant={ButtonVariantTypes.big} text={'Guarda ora'} url="/theoplayer" />
                    </div>
                </div>
            </div>
        </div>
    )
};