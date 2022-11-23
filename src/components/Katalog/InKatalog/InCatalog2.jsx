import React, { useEffect, useState } from 'react'
import './inKatalog.css';
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
import Loader from '../../Loader/Loader';
import { getText } from '../../locales/index'
import TabsKatalog2 from './KatalogTabs/TabKatalog2';


export default function InCatalog2() {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [allProducts, setAllProducts] = useState([])
    const [loader, setLoader] = useState(true)


    const getAllProducts = async () => {
        await axios.get(API_PATH + '/main/products/')
            .then((res) => {
                setAllProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getById = async () => {
        await axios.get(API_PATH + `/products/product-2-detail/${path}`)
            .then((res) => {
                setProduct(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }

    useEffect(() => {
        getById()
        // getAllProducts()
    }, [path])

    return (
        <>
            <div className="in_kat">
                {loader ? <div style={{ height: '50vh' }} > <Loader /></div> : <>
                    <div className="top_in_kat">
                        <button className='send_katalog botm_kupi'>{getText("katalog4")}</button>
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
                            {product.product_2_images && product.product_2_images.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img alt='sunriseinfo produkt' src={item.image} />
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

                            <div className="for_inthekataloig">
                                {product.product_2_images && product.product_2_images.map((item, index) => (

                                    <SwiperSlide key={index}>
                                        <img key={index} alt='sunriseinfo produkt' src={item.image} />
                                    </SwiperSlide>

                                ))}
                            </div>

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
                            <h2>{product.name.slice(0, 20) && product.name.slice(0, 20)}</h2>
                            <p>{product.get_rate && product.get_rate.toString().slice(0, 3)} {getText("katalog5")} <a href="#"></a></p>
                            <h5 className='sena_katalog'>{product.price && product.price} {getText("katalog3")}</h5>
                            <h4> {getText("katalog6")}</h4>
                            <p>{product.description && product.description.slice(0, 20)}</p>
                            <a href='tel: +998949988898' className='send_katalog'>{getText("katalog4")}</a>
                        </div>
                    </div>
                    <TabsKatalog2 product={product} />
                    {/* <Swiper2 allProducts={allProducts} /> */}
                </>}
            </div>

        </>
    )
}
