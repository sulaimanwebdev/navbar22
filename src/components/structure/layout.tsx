import React, { ReactNode } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps ) {
    return (
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    )
}