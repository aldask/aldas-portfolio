import React, { ReactNode, useState } from "react";
import { Swiper } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

interface SliderProp {
  children: ReactNode;
}

const Slider: React.FC<SliderProp> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    console.log(activeIndex);
    setActiveIndex((prevSlide) => prevSlide + 1);
  };

  return (
    <Swiper
      //@ts-ignore
      modules={[Pagination, Scrollbar, A11y, Mousewheel, Keyboard]}
      slidesPerView={1}
      mousewheel={true}
      keyboard={true}
      pagination={{ clickable: true }}
      loop={true}
      className="slide"
      onSlideChange={handleSlideChange}
    >
      <div key={activeIndex}>{children}</div>
    </Swiper>
  );
};

export default Slider;
