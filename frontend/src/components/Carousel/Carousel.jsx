import { Swiper, SwiperSlide } from "swiper/react";

import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Carousel = () => (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src=".\src\assets\Marvel.png" /></SwiperSlide>
      <SwiperSlide><img id="dc" src=".\src\assets\dc.png" /></SwiperSlide>
      <SwiperSlide><img src=".\src\assets\Lucasfilm.svg" /></SwiperSlide>
      <SwiperSlide><img src=".\src\assets\Shueisha.svg" /></SwiperSlide>
    </Swiper>
);

export default Carousel;
