import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ali",
      comment:
        "My son loves these toys! Great quality and super creative options.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "John Rahman",
      comment: "Fast delivery and the toys are durable. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Mina Hossain",
      comment: "The toys are fantastic and my kids are so happy!",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 4,
      name: "Arif Khan",
      comment: "Excellent service and quality toys. Will buy again.",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <section className="w-full  mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <img
                src={review.img}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
                {review.name}
              </h3>
              <p className="text-gray-600 text-center my-2 mb-2">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UserReview;
