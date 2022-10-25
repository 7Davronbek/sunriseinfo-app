import React, { useRef, useState } from 'react'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card_1 from '../../../../image/image 3.png'
import Card_2 from '../../../../image/image 4.png'
import Card_3 from '../../../../image/image 5 (1).png'
import Card_4 from '../../../../image/image 5.png'
import '../TabsKatalog.css';
import serdechka from '../../../../image/Union.svg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";



export default function Swiper2() {
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
                <SwiperSlide> <div className="img_carousel_1 katalog_swiper">
                    <div className="image_carousel">
                        <img src={Card_1} alt="" />
                    </div>
                    <p>Cursus eget id elit consequat dolor.</p>
                    <div className="btn_sotsh">
                        <button data-aos="fade-right" className="sena_send btn_sol">1 500 000 сум</button>

                        <button data-aos="fade-left" className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>
                    <div className="img_carousel_1">
                        <div className="image_carousel">
                            <img src={Card_2} alt="" />
                        </div>
                        <p>Erat urna sed viverra mauris eu.</p>
                        <div className="btn_sotsh">
                            <button data-aos="fade-right" className="sena_send btn_sol">15 455 000 сум</button>

                            <button data-aos="fade-left" className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img_carousel_1">
                        <div className="image_carousel padd_img">
                            <img src={Card_3} alt="" />
                        </div>
                        <p>Quis massa pulvinar quam.</p>
                        <div className="btn_sotsh">
                            <button data-aos="fade-right" className="sena_send btn_sol">700 000 сум</button>

                            <button data-aos="fade-left" className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img_carousel_1">
                        <div className="image_carousel padd_img">
                            <img src={Card_4} alt="" />

                        </div>
                        <p>Molestie aliquet purus amet amet.</p>
                        <div className="btn_sotsh">
                            <button data-aos="fade-right" className="sena_send btn_sol">700 000 сум</button>
                            <button data-aos="fade-left" className="bnt-serdechka"><img src={serdechka} alt="" /></button>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </>
    )
}
