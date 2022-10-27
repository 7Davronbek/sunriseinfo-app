import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import KatalogObshi from '../components/Katalog/KatalogObshi/KatalogObshi'

const Catalog2 = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>

            <div className="katalaog_glavni">
                <div className="katalog_left">
                    <h2>Каталог</h2>
                    <div class="container">
                        <div class="webflow-style-input">
                            {/* <input className='input_katalog' type="text" placeholder="Поиск"></input> */}
                            {/* <button className='btn_katalog' type="submit"><IoIosArrowRoundForward /></button> */}
                        </div>
                    </div>
                    <h4 className='filtr_h4'>Фильтр</h4>

                    <main className='main_accrdion'>
                        <div className='container'>
                            <section className='info'>
                                {/* {category && category.map((question) => (
                                    <Question key={question.id} {...question} />
                                ))} */}

                                <article className='question'>
                                    <header>
                                        <h4 onClick={() => setExpanded(!expanded)} style={{ userSelect: 'none' }} className='question-title py-3 w-100'>
                                            {/* {name} */}lorem
                                        </h4>
                                        <button className='btn' onClick={() => setExpanded(!expanded)}>
                                            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </header>
                                    {expanded &&
                                        <ul>
                                            <li style={{ cursor: 'pointer', userSelect: 'none' }}>lorem</li>
                                        </ul>
                                    }
                                </article>

                            </section>
                        </div>
                    </main>
                </div>

                <div className="katalog_right">
                 
                    <div className="top_cards_katalog">
                        <KatalogObshi />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Catalog2