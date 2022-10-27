import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card_1 from '../../../../image/image 3.png'
import Card_2 from '../../../../image/image 4.png'
import Card_3 from '../../../../image/image 5 (1).png'
import Card_4 from '../../../../image/image 5.png'
import '../orgotexnikaKatalog.css';
import serdechka from '../../../../image/Union.svg';
import { Link } from 'react-router-dom';

export default function Swiper2({ allProducts }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {allProducts && allProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="img_carousel_1">
              <div className="image_carousel">
                <img src={Card_1} alt="sunriseinfo" />
              </div>
              <div className="xalegi">
                <p>{item.name}</p>
                <div className="btn_sotsh">
                  <Link to={`/see-catalog/${item.id}`} data-aos="fade-right" className="sena_send btn_sol">{item.price} сум</Link>

                  <button data-aos="fade-left" className="bnt-serdechka"><img src={serdechka} alt="sunriseinfo" /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </>
  )
}
