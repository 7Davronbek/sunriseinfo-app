import React, { useEffect, useState } from 'react'
import './katalogObshiy.css'
import serdechka from '../../../image/Union.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../../tools/constants'
import Loader from '../../Loader/Loader'
import { getText } from '../../locales/index'

export default function KatalogObshi({ catchProduct }) {
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)


    const getProducts = async () => {
        await axios.get(API_PATH + '/main/products/?pk=' + catchProduct)
            .then((res) => {
                setProduct(res.data.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }

    // console.log(product.map((item) => (item.product_images.map((item2) => console.log(API_PATH + item2.image)))));

    useEffect(() => {
        getProducts()
    }, [catchProduct])

    return (
        <>
            <div className="frs_katalog">


                <div className="top_frs_1">
                    {loader &&
                        <div className="frs_1 ">
                            <Loader />
                        </div>
                    }


                    {product && product.map((item, index) => (

                        <div key={index} className="frs_1">
                            <div className="sliceing">
                                <div className="imag_frs_1">
                                    {item.product_images && item.product_images.slice(0, 1).map((item2, index2) => (
                                        <img key={index2} className='w-100' src={API_PATH + item2.image} alt="" />
                                    ))}
                                </div>
                                <h2 className='text_frs1'>{item.description.slice(0, 80)}</h2>
                            </div>

                            <div className="text_frs">

                                <div className="btn_katalog">
                                    <Link to={`/see-catalog/${item.id}`} style={{ textDecoration: "none" }}>
                                        <button className="btn_sena">{item.price} {getText("katalog3")}</button>
                                    </Link>
                                    <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>


            </div>
        </>
    )
}
