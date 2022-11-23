import React, { useEffect, useState } from 'react'
import './katalogGlavni.css';
import { IoIosArrowRoundForward } from 'react-icons/io'
import Question from './SingleQuestion';
// import data from '../data';
import KatalogObshi from '../KatalogObshi/KatalogObshi';
import axios from 'axios';
import { API_PATH } from '../../../tools/constants'
import Loader from '../../Loader/Loader';
import { getText } from '../../locales/index'

export default function KatalogGlavni() {
    const [category, setCategory] = useState([])
    const [loader, setLoader] = useState(true)
    const [catchProduct, setCatchProduct] = useState('')

    const getCategories = async () => {
        await axios.get(API_PATH + '/main/category')
            .then((res) => {
                setCategory(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <div className="katalaog_glavni">
                <div className="katalog_left">
                    <h2>{getText("katalog1")}</h2>
                    <div class="container">
                        <div class="webflow-style-input">
                            <input className='input_katalog' type="text" placeholder="Поиск"></input>
                            <button className='btn_katalog' type="submit"><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    <h4 className='filtr_h4'>{getText("katalog2")}</h4>

                    <main className='main_accrdion'>
                        <div className='container'>
                            <section className='info'>
                                {loader && <Loader />}
                                <h5 onClick={() => { setCatchProduct('') }} className='question-title py-3 w-100'>
                                    Все
                                </h5>
                                {category && category.map((question) => (
                                    <Question setCatchProduct={setCatchProduct} key={question.id} {...question} />
                                ))}
                            </section>
                        </div>
                    </main>
                </div>

                <div className="katalog_right">
                    {/* <div className="poisk">
                        <div class="select animated zoomIn">
                            <input type="radio" name="option" />
                            <span class="placeholder">Фильтр</span>
                            <label class="option">
                                <input type="radio" name="option" />
                                <span class="title animated fadeIn"><i class="icon icon-speedometer"></i>По возрастанию</span>
                            </label>
                            <label class="option">
                                <input type="radio" name="option" />
                                <span class="title animated fadeIn"><i class="icon icon-fire"></i>По убыванию</span>
                            </label>
                        </div>
                    </div> */}
                    <div className="top_cards_katalog">
                        <KatalogObshi catchProduct={catchProduct} />
                    </div>
                </div>
            </div>
        </>
    )
}
