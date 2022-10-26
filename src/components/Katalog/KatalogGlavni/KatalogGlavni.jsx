import React, { useState } from 'react'
import './katalogGlavni.css';
import { IoIosArrowRoundForward } from 'react-icons/io'
import Question from './SingleQuestion';
import data from '../data';
import KatalogObshi from '../KatalogObshi/KatalogObshi';

export default function KatalogGlavni() {
    const [questions, setQuestions] = useState(data)
    return (
        <>
            <div className="katalaog_glavni">
                <div className="katalog_left">
                    <h2>Каталог</h2>
                    <div class="container">
                        <div class="webflow-style-input">
                            <input className='input_katalog' type="text" placeholder="Поиск"></input>
                            <button className='btn_katalog' type="submit"><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    <h4 className='filtr_h4'>Фильтр</h4>

                    <main className='main_accrdion'>
                        <div className='container'>
                            <section className='info'>
                                {/* {questions.map((question) => (
                                    <Question key={question.id} {...question} />
                                ))} */}
                            </section>
                        </div>
                    </main>
                </div>

                <div className="katalog_right">
                    <div className="poisk">
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
                        </div></div>
                    <div className="top_cards_katalog">
                        <KatalogObshi />
                    </div>
                </div>
            </div>
        </>
    )
}
