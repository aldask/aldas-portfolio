import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { slideComponents } from "../../../Data/slides";

function Slide() {
  return (
    <Slider>
      {slideComponents.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Slider>
  );
}

export default Slide;
