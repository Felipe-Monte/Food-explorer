import { Container } from './styles'
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FoodCard } from '../FoodCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        <SwiperSlide><FoodCard /></SwiperSlide>
        
      </Swiper>

    </Container>
  );
}