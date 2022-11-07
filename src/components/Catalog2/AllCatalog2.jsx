import React, { useEffect, useState } from 'react'
import '../Katalog/KatalogObshi/katalogObshiy.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'
import serdechka from '../../image/Union.svg'
// import { API_PATH } from '../../../tools/constants'

export default function AllCatalog2() {
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        await axios.get(API_PATH + '/products/products-2/')
            .then((res) => {
                setProduct(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log(product);

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="frs_katalog">
                <div className="top_frs_1">

                    {product && product.map((item, index) => (

                        <div key={index} className="frs_1">
                            <div className="imag_frs_1">
                                {product.product_2_images && product.product_2_images.map((item2, index2) => (
                                    <img key={index2} src={API_PATH + item2.image} alt="" />
                                ))}
                            </div>
                            <div className="text_frs">
                                <h2>{item.description}</h2>
                                <div className="btn_katalog">
                                    <Link to={`/see-catalog/${item.id}`} style={{ textDecoration: "none" }}>
                                        <button className="btn_sena">{item.price} сум</button>
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
