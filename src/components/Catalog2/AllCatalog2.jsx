import React, { useEffect, useState } from 'react'
import './katalogObshiy.css'
import Card_img from '../../../image/image 3.png'
import serdechka from '../../../image/Union.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../../tools/constants'

export default function AllCatalog2() {


    return (
        <>
            <div className="frs_katalog">
                <div className="top_frs_1">

                    {/* {product && product.map((item, index) => (

                        <div key={index} className="frs_1">
                            <div className="imag_frs_1">
                                <img src={Card_img} alt="" />
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

                    ))} */}

                </div>


            </div>
        </>
    )
}
