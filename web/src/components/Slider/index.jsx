import { Food } from '../Food'

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
    >
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
      <SwiperSlide><Food/></SwiperSlide>
    
    </Swiper>
  );
};