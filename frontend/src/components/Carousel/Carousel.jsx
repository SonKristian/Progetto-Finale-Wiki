import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Carousel = () => (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    
      <SwiperSlide>
        <Link to="/category/Marvel Comics">
          <img id="marvel" src=".\src\assets\Marvel.png" />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/category/DC Comics">
          <img id="dc" src=".\src\assets\dc.png" />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/category/George Lucas">
          <img id="lucas" src=".\src\assets\Lucasfilm.svg" />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/category/Shueisha">
          <img id="shueisha" src=".\src\assets\Shueisha.svg" />
        </Link>    
      </SwiperSlide>

    </Swiper>
);

export default Carousel;
