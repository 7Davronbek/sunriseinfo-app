import React, { useEffect, useState } from 'react'
import './inKatalog.css';
// import Inkatalog from '../../../image/image 4.png'
import TabsKatalog from './KatalogTabs/TabsKatalog';
import Swiper2 from '../../Orgotextnika/OrgotexnikaKatalog/Swiper/Swiper';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_PATH } from '../../../tools/constants';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";


export default function InKatalog() {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async() => {
        await axios.get(API_PATH + '/main/products/')
            .then((res) => {
                setAllProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getById = async () => {
        await axios.get(API_PATH + `/main/product-detail/${path}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getById()
        getAllProducts()
    }, [path])

    return (
        <>
            <div className="in_kat">
                <div className="top_in_kat">
                    <button className='send_katalog botm_kupi'>Купить</button>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    >
                        {product.product_images && product.product_images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img alt='sunriseinfo produkt' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {product.product_images && product.product_images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img alt='sunriseinfo produkt' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="left_top1">
                        <div className="left_img_top1">
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                        </div>
                        <div className="inkatalog_big_img"><img src={Inkatalog} alt="" /></div>
                    </div> */}
                    <div className="right_top1">
                        <h2>{product.name && product.name}</h2>
                        <p>{product.get_rate && product.get_rate} отзыв <a href="#"></a></p>
                        <h5 className='sena_katalog'>{product.price && product.price} сум</h5>
                        <h4>Описание </h4>
                        <p>{product.description && product.description.slice(0, 20)}</p>
                        <a href='tel: +998949988898' className='send_katalog'>Купить</a>
                    </div>
                </div>
                <TabsKatalog product={product} />
                <Swiper2 allProducts={allProducts} />
            </div>

        </>
    )
}
