import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import images from assets/rent
import rent1 from "@/assets/rent/rent1.webp";
import rent2 from "@/assets/rent/rent2.webp";
import rent3 from "@/assets/rent/rent3.webp";
import rent4 from "@/assets/rent/rent4.webp";
import rent5 from "@/assets/rent/rent5.webp";
import rent6 from "@/assets/rent/rent6.webp";
import rent7 from "@/assets/rent/rent7.webp";
import rent8 from "@/assets/rent/rent8.webp";
import rent9 from "@/assets/rent/rent9.webp";
import rent10 from "@/assets/rent/rent10.webp";

const rentImages = [
    rent1,
    rent2,
    rent3,
    rent4,
    rent5,
    rent6,
    rent7,
    rent8,
    rent9,
    rent10,
];

interface ImageCarouselProps {
    images?: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const displayImages = images && images.length > 0 ? images : rentImages;

    return (
        <div className="w-full bg-gray-900 py-12 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={"auto"}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                className="smooth-swiper"
                breakpoints={{
                    320: {
                        spaceBetween: 10,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                }}
            >
                {displayImages.map((src, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        <div className="group relative aspect-[3/4] h-56 md:h-72 flex-shrink-0 overflow-hidden rounded-2xl">
                            <img
                                src={src}
                                alt={`Showcase image ${index + 1}`}
                                className="w-full h-full object-cover shadow-md select-none transition-transform duration-500 group-hover:scale-110"
                                draggable={false}
                                loading="eager"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style>{`
        .smooth-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
        </div>
    );
};
