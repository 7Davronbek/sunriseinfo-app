import React, { useEffect, useRef, useState } from 'react'
// import './swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card_1 from '../../../../image/image 3.png'
import Card_2 from '../../../../image/image 4.png'
import Card_3 from '../../../../image/image 5 (1).png'
import Card_4 from '../../../../image/image 5.png'
// import '../orgotexnikaKatalog.css';
import serdechka from '../../../../image/Union.svg';
import axios from 'axios';
import { API_PATH } from '../../../../tools/constants';

export default function Swiper2() {
    const [swiperr, setSwiperr] = useState([])
    const [loader, setLoader] = useState(true)
    const getSwiperr = async () => {
        await axios.get(API_PATH + '/products/products-2/')
            .then((res) => {
                setLoader(false)
                setSwiperr(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => { setLoader(false) })
    }
    useEffect(() => {
        getSwiperr()
    }, [])
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
                {swiperr && swiperr.map((item,index) => (
                    <SwiperSlide> <div className="img_carousel_1">
                    <div className="image_carousel">
                        <img src={Card_1} alt="" />
                    </div>
                    <p>{item.name}</p>
                    <div className="btn_sotsh">
                        <button data-aos="fade-left" className="sena_send btn_sol">{item.price} сум</button>
                        <button data-aos="fade-right" className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                    </div>
                </div>
                </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}
