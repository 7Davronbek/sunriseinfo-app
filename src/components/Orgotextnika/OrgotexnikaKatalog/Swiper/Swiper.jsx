import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../orgotexnikaKatalog.css';
import serdechka from '../../../../image/Union.svg';
import { Link } from 'react-router-dom';
import { API_PATH } from '../../../../tools/constants';
import {getText} from '../../../locales/index'

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
                {item.product_images && item.product_images.map((item2, index2) => (
                  <img key={index2} src={API_PATH + item2.image} alt="sunriseinfo" />
                ))}
              </div>
              <div className="xalegi">
                <p>{item.name}</p>
                <div className="btn_sotsh">
                  <Link to={`/see-catalog/${item.id}`} data-aos="fade-right" className="sena_send btn_sol">{item.price} {getText("katalog3")}</Link>

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
