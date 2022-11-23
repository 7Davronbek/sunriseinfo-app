import React, { useEffect, useState } from 'react'
import '../Katalog/KatalogObshi/katalogObshiy.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'
import serdechka from '../../image/Union.svg'
import { getText } from '../locales'
// import { API_PATH } from '../../../tools/constants'

export default function AllCatalog2({catchProduct}) {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await axios.get(API_PATH + '/products/products-2/?pk=' + catchProduct)
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getProducts()
    }, [catchProduct])

    return (
        <>
            <div className="frs_katalog">
                <div className="top_frs_1">


                    {products && products.map((item, index) => (

                        <div key={index} className="frs_1">
                            <div className="sliceing">
                                <div className="imag_frs_1">
                                    {item.product_2_images && item.product_2_images.slice(0, 1).map((item2, index2) => (
                                        <img key={index2} className='w-100' src={API_PATH + item2.image} alt="" />
                                    ))}
                                </div>
                                <h2 className='text_frs1'>{item.description.slice(0, 80)}</h2>
                            </div>

                            <div className="text_frs">

                                <div className="btn_katalog">
                                    <Link to={`/see-catalog-2/${item.id}`} style={{ textDecoration: "none" }}>
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
