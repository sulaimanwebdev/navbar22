import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
      <SwiperSlide><div className="pt-10"><Card/></div></SwiperSlide>
    </Swiper>
  );
};