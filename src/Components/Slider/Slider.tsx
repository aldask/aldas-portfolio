import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface SliderProp {
  children: ReactNode;
}

const Slider: React.FC<SliderProp> = ({ children }) => {
  return (
    <Swiper
      //@ts-ignore
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={75}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      className="blast"
    >
      {children}
    </Swiper>
  );
};

export default Slider;
