import React, { useEffect } from 'react'
import './katalogObshiy.css'
import Card_img from '../../../image/image 3.png'
import serdechka from '../../../image/Union.svg'
import Card_image_2 from '../../../image/image 4.png'
import Card_image_3 from '../../../image/image 5.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../../tools/constants'

export default function KatalogObshi() {

    const getProducts = async () => {
        await axios.get(API_PATH + '/main/products')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="frs_katalog">
                <div className="top_frs_1">
                    <div className="frs_1">
                        <div className="imag_frs_1">
                            <img src={Card_img} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <Link to='/inkatalog' style={{ textDecoration: "none" }}>
                                    <button className="btn_sena">15 455 000 сум</button>
                                </Link>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 img_sec">
                            <img src={Card_image_2} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 image_keyborads">
                            <img src={Card_image_3} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="top_frs_1">
                    <div className="frs_1">
                        <div className="imag_frs_1">
                            <img src={Card_img} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <Link to='/inkatalog' style={{ textDecoration: "none" }}>
                                    <button className="btn_sena">15 455 000 сум</button>
                                </Link>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 img_sec">
                            <img src={Card_image_2} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 image_keyborads">
                            <img src={Card_image_3} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top_frs_1">
                    <div className="frs_1">
                        <div className="imag_frs_1">
                            <img src={Card_img} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <Link to='/inkatalog' style={{ textDecoration: "none" }}>
                                    <button className="btn_sena">15 455 000 сум</button>
                                </Link>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 img_sec">
                            <img src={Card_image_2} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="frs_1">
                        <div className="imag_frs_1 image_keyborads">
                            <img src={Card_image_3} alt="" />
                        </div>
                        <div className="text_frs">
                            <h2>Cursus eget id elit consequat dolor.</h2>
                            <div className="btn_katalog">
                                <button className="btn_sena">15 455 000 сум</button>
                                <button className="bnt_serdechka"><img src={serdechka} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
