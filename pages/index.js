//react
import React from 'react';
//css
import '../styles/globals.scss';
import AOS from 'aos';

//components
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import FeaturesHome from '../components/FeaturesHome';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesWorld from '../components/FeaturesWorld';
import News from '../components/News';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const location = useLocation();

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

useEffect(() => {
  document.querySelector('html').style.scrollBehavior = 'auto'
  window.scroll({ top: 0 })
  document.querySelector('html').style.scrollBehavior = ''
}, [location.pathname]); // triggered on route change

export default function Home() {
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
