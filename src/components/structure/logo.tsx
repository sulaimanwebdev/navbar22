import React from 'react';
import Image from 'next/image'
import logoImg from '/public/images/logo.png'
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logoImg} alt="Mds"/>
        </Link>
    )
};

export default Logo;