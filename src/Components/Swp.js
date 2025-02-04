import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Swp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: '1', img: '/Images/pizza-with-cheese-tomatoes.avif', title: 'Pizza' },
    { id: '2', img: '/Images/chickenpic.avif', title: 'Chicken Pizza' },
    { id: '3', img: '/Images/burgerpic.avif', title: 'Burger' },
    { id: '4', img: '/Images/chickenbur.jpg', title: 'Chicken Burger' },
    { id: '5', img: '/Images/maggi.avif', title: 'Maggi' },
    { id: '6', img: '/Images/cheesemag.jpg', title: 'Cheese Maggi' },
    { id: '7', img: '/Images/momo.avif', title: 'Momos' },
    { id: '8', img: '/Images/mojito3.avif', title: 'Mojito' },
    { id: '9', img: '/Images/icecream.avif', title: 'Icecream' },
  
  ];

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation,Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`border w-96 shadow-xl shadow-pink-700  rounded-2xl transition-transform duration-300 ${
                index === activeIndex + 1 ? 'lg:scale-110' : 'scale-100'
              }`}
            >
              <img src={item.img} className="w-full rounded-t-2xl" alt={item.title} />
              <h1 className='font-bold '>{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          padding: 50px;
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
