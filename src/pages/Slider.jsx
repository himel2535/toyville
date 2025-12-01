import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ toys }) => {
  return (
    <div className="w-full mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false, 
        }}
      >
        {toys.map((toy) => (
          <SwiperSlide key={toy.toyId}>
            <div className=" overflow-hidden hover:shadow-xl transition duration-300">
              <div className="flex flex-col items-center justify-center  h-65">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-45 object-contain"
                />
                <h3 className="text-xs text-center font-semibold my-2">
                  {toy.toyName}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
