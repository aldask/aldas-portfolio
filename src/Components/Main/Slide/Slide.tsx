import React from "react";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { slideComponents } from "../../../Data/slides";

function Slide() {
  return (
    <Slider>
      {slideComponents.map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive, isPrev, isNext }) => {
            const slideClassNames = `slide-content ${
              isActive ? "active" : ""
            } ${isPrev ? "prev" : ""} ${isNext ? "next" : ""}`;

            return <div className={slideClassNames}>{slide}</div>;
          }}
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default Slide;
