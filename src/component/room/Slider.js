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
    <div className="flex m-0 w-full h-full bg-zinc-700 rounded-br-lg rounded-tr-lg rounded-bl-lg md:rounded-bl-none">
      <span className="w-full my-auto">
        {isObject ? (
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {image.map((a) => (
              <SwiperSlide>
                <span className="h-full w-auto">
                  <img
                    src={a}
                    alt="room"
                    className="object-cover h-auto  w-full shad"
                  />
                </span>
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
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <span className="h-full w-auto">
                <img
                  src={image}
                  alt="room"
                    className="object-cover h-auto  w-full shad rounded-br-lg rounded-bl-lg md:rounded-none "
                />
              </span>
            </SwiperSlide>
          </Swiper>
        )}
      </span>
    </div>
  );
};

export default Slider;
