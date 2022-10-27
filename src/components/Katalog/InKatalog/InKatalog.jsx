import React, { useEffect, useState } from 'react'
import './inKatalog.css';
import Inkatalog from '../../../image/image 4.png'
import TabsKatalog from './KatalogTabs/TabsKatalog';
import Swiper2 from '../../Orgotextnika/OrgotexnikaKatalog/Swiper/Swiper';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_PATH } from '../../../tools/constants';


export default function InKatalog() {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})

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
    }, [path])

    return (
        <>
            <div className="in_kat">
                <div className="top_in_kat">
                    <button className='send_katalog botm_kupi'>Купить</button>
                    <div className="left_top1">
                        <div className="left_img_top1">
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                            <div className="inkatalog_image"><img src={Inkatalog} alt="sunriseinfo produkt" /></div>
                        </div>
                        <div className="inkatalog_big_img"><img src={Inkatalog} alt="" /></div>
                    </div>
                    <div className="right_top1">
                        <h2>{product?.name}</h2>
                        <p>1 отзыв <a href="#">| Добавить отзыв</a></p>
                        <a className='sena_katalog' href="#">{product?.price} сум</a>
                        <h4>Описание </h4>
                        <p>{product?.description}</p>
                        <a href='tel: +998949988898' className='send_katalog'>Купить</a>
                    </div>
                </div>
                <TabsKatalog product={product} />
                <Swiper2 />
            </div>

        </>
    )
}
