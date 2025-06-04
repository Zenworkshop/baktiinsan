import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import Layanan from '../components/Layanan';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Count from '../components/Count';
import News from '../components/News';
import Catalog from '../components/Catalog';
import Cta from '../components/Cta';


export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <Layanan />
      <WhyUs />
      <Services />
      <Count/>
      <News/>
      <Catalog/>
      <Cta/>
    </div>
  );
}