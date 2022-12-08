import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ image }) => {
  const isObject = typeof image === "object";
  return (
    <div>
      {isObject ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {image.map((a) => (
            <SwiperSlide>
              <img
                src={a}
                alt="room"
                className="object-cover md:h-full  h-[24rem] rounded-br-lg rounded-bl-lg md:rounded-tr-lg md:rounded-bl-none  w-full border"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={image}
              alt="room"
              className="object-cover md:h-full  h-[24rem] rounded-br-lg rounded-bl-lg md:rounded-tr-lg md:rounded-bl-none  w-full border"
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
