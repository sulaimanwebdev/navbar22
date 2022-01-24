import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '/public/images/logo.png'
import Logo from '../logo';


const FooterSmall = () => {
    return (
        <div>
            <div className="px-16 sm:px-36 md:px-48 py-5">
                <Logo/>
                <div className="text-center">
                    <Link href="/">
                      <a className="text-grey-light-f8">VAI AL SITO UFFICIALE</a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row text-center">
                <div className="bg-dark basis-1/2">
                    <div className="flex flex-col">
                        <Link href="/">
                          <a className="text-grey-light-f8">DIRETTE</a>
                        </Link>
                        <Link href="/">
                          <a className="text-grey-light-f8">ON DEMAND</a>
                        </Link>
                        <Link href="/">
                          <a className="text-grey-light-f8">ABBONAMENTI</a>
                        </Link>
                    </div>
                </div>
                <div className="bg-dark basis-1/2">
                    <div className="flex flex-col">
                        <Link href="/">
                          <a className="text-grey-light-f8">SCUOLE</a>
                        </Link>
                        <Link href="/">
                          <a className="text-grey-light-f8">LOGIN</a>
                        </Link>
                        <Link href="/">
                          <a className="text-grey-light-f8">LINGUA</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-5 text-center text-sm">
                <Link href="/">
                  <a className="text-grey-light-6c">Dati legali</a>
                </Link>
                <Link href="/">
                  <a className="text-grey-light-6c">Termini e condizioni</a>
                </Link>
                <Link href="/">
                  <a className="text-grey-light-6c">Informazioni sulla Privacy</a>
                </Link>
                <Link href="/">
                  <a className="text-grey-light-6c">Informativa sui Cookie</a>
                </Link>
            </div>
{/* 
            
                    <div className="grid grid-cols-4 content-center">
                        
                    </div>
                </div>
            </div> */}
        </div>
        
    )
};

export default FooterSmall;