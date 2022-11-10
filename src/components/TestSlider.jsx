import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
const TestSlider = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i+1}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i+1}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

  return (
    <div className='container mx-auto mt-5 '>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}

        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={1}
        slidesPerView={5}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>

      {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper> */}
    </div>
  )
};
export default TestSlider;