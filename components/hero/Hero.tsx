"use client";
import { LandmarkCardProps } from "@/utils/types";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {landmarks.map((landmark) => {
          return (
            <SwiperSlide key={landmark.image} className="group">
              <div className="relative rounded-md overflow-hidden ">
                <img
                  className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition duration-300"
                  src={landmark.image}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Hero;
