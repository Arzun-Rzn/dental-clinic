import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src="/slide1.png" alt="slide1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slide2.jpeg" alt="slide2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slide3.jpeg" alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;