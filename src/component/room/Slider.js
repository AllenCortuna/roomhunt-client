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
    <div className="flex m-0 w-full h-full bg-zinc-700 rounded-lg justify-center conter-center">
      <span className="w-full my-auto">
        {isObject ? (
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoHeight={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {image.map((a) => (
              <SwiperSlide>
                <span className="max-h-[20rem] w-auto my-auto " key={a}>
                  <img
                    src={a}
                    alt="room"
                    className="object-cover max-h-[20rem] my-auto w-full shad rounded-lg"
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
            autoHeight={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <span className="h-full w-auto">
                <img
                  src={image}
                  alt="room"
                  className="object-cover h-full  w-full shad rounded-lg my-auto "
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
