import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import yayasanbakti1 from '../assets/sliding1.png';
import yayasanbakti2 from '../assets/sliding2.png';
import yayasanbakti3 from '../assets/sliding3.png';
import yayasanbakti4 from '../assets/sliding4.png';

export default function HomeCarousel() {
  const slides = [
    {
      image: yayasanbakti1,
      title: "Modern Glass Solutions",
      subtitle: "Transform your space with elegant glass installations"
    },
    {
      image: yayasanbakti2,
      title: "Premium Aluminum Works",
      subtitle: "Quality craftsmanship for lasting beauty"
    },
    {
      image: yayasanbakti3,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    },
    {
      image: yayasanbakti4,
      title: "Innovative Designs",
      subtitle: "Where creativity meets functionality"
    }
  ];

  return (
    <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="w-full h-auto sm:h-screen pt-20 sm:pt-24"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-auto">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto sm:h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  
  
  );
}