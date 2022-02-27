//react
import React from 'react';
//css
// import AOS from 'aos';

//components
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import FeaturesHome from '../components/FeaturesHome';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesWorld from '../components/FeaturesWorld';
import News from '../components/News';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default function Home() {

  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: 'phone',
  //     duration: 700,
  //     easing: 'ease-out-cubic',
  //   });
  //   // eslint-disable-next-line no-unused-vars
  //   const sticky = new Sticky('[data-sticky]');
  // });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

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
