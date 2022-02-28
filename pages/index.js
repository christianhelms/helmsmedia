//react
import React, { useEffect } from 'react';
import Head from 'next/head'
//css
import AOS from 'aos';
import Sticky from 'sticky-js';

//components
import { Header, HeroHome, FeaturesHome, 
  FeaturesBlocks, FeaturesWorld, News, 
  Cta, Footer } from '../components'

export default function Home() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Helms Media</title>
        <link rel="icon" href="./public/helms-media-logo.svg" />
      </Head>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
