import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import banner1 from "../assets/toysBanner2.jpg";
import banner3 from "../assets/toyBanner4.avif"
import banner2 from "../assets/toysBanner3.webp";
import banner4 from "../assets/toysBanner5.avif";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const banners = [banner1, banner2, banner3,banner4];
  return (
    <div className="w-full mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false,
        }}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide>
            <div className=" overflow-hidden hover:shadow-xl transition duration-300">
              <div className="flex flex-col items-center justify-center  ">
                <img src={banner} className="w-full object-cover h-[400px]" />
                {/* <h3 className="text-xs text-center font-semibold my-2">
                  {banner.toyName}
                </h3> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
