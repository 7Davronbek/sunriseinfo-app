import React, { useEffect, useState } from 'react'
import './solnechniyKatalog.css'
import card_1 from '../../../image/image 13.png'
import card_2 from '../../../image/image 14.png'
import card_3 from '../../../image/image 15.png'
import card_4 from '../../../image/image 17.png'
import card_5 from '../../../image/image 19.png'
import card_6 from '../../../image/image 20.png'
import card_7 from '../../../image/image 23.png'
import card_8 from '../../../image/image 25.png'
// import ResponsiveSol from './Carousel/CarouselSlo'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_PATH } from '../../../tools/constants'
import Loader from '../../Loader/Loader'
import {getText} from '../../locales/index'

export default function SolnechniyKatalog() {
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    const getCategories = async () => {
        await axios.get(API_PATH + '/products/category-2/')
            .then((res) => {
                setLoader(false)
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => { setLoader(false) })
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <>
            <div className="solnechniy_katLOG">
                <h2 data-aos="fade-up">{getText("soln13")}</h2>
                <div className="card_katalog" id='card-katalog'>
                    {loader && <Loader />}
                    {categories && categories.map((item, index) => (
                        <Link key={index} to={`/katalog-2`} data-aos="fade-up" className="card_image">
                            <h3>{item.name}</h3>
                            <img src={item.image} alt="sunriseinfo" />
                        </Link>
                    ))}

                    <Link style={{ textDecoration: "none", color: "#121212" }} to='/contact' data-aos="fade-up" className="card_image">
                        <div style={{ textDecoration: "none", color: "#121212" }} ><h3 style={{ textDecoration: "none !important", color: "#121212" }} className='' >{getText("about1")}</h3></div>
                    </Link>
                </div>
            </div>

        </>
    )
}
