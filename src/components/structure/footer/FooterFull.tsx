import React from 'react';
import Link from 'next/link'
import Logo from '../logo';


const FooterFull = () => {
    return (
        <div className="flex flex-row">
            <div className="bg-dark basis-5/12 md:basis-3/12 py-10 px-5 lg:px-10">
                <Logo/>
            </div>
            <div className="flex-auto grid content-center">
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
                    <Link href="/">
                      <a className="text-grey-light-f8">DIRETTE</a>
                    </Link>
                    <Link href="/">
                      <a className="text-grey-light-f8">ON DEMAND</a>
                    </Link>
                    <Link href="/">
                      <a className="text-grey-light-f8">ABBONAMENTI</a>
                    </Link>
                    <Link href="/">
                      <a className="text-grey-light-f8">SCUOLE</a>
                    </Link>
                    <Link href="/">
                      <a className="text-grey-light-f8">LOGIN</a>
                    </Link>
                    <Link href="/">
                      <a className="text-grey-light-f8">SITO UFFICIALE</a>
                    </Link>
                </div>
                <div className="grid grid-cols-4 content-center text-sm">
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
            </div>
        </div>
    )
};

export default FooterFull;