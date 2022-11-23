import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import AllCatalog2 from '../components/Catalog2/AllCatalog2'
import { API_PATH } from '../tools/constants'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Catalog2 = () => {
    const [expanded, setExpanded] = useState(false)
    const [categories, setCategories] = useState([])

    const getProductCategories = async () => {
        await axios.get(API_PATH + '/products/category-2/')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        getProductCategories()
    }, [])

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

                                <h6 className='mb-3 pb-3' style={{ cursor: 'pointer', borderBottom: '1px solid silver' }}>Все</h6>
                                {categories && categories.map((item, index) => (
                                    <h6 className='mb-3 pb-3' key={index} style={{ cursor: 'pointer', borderBottom: '1px solid silver' }}>{item.name}</h6>
                                ))}

                                {/* <Accordion className='service__list border2' open={open} toggle={toggle}>
                                    <AccordionItem className='wrap'>
                                        <AccordionHeader targetId="1">
                                            Lorem
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">

                                            <ul>
                                                <li>Lorem3</li>
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion> */}


                                {/* <article className='question'>
                                    <header>
                                        <h4 onClick={() => setExpanded(!expanded)} style={{ userSelect: 'none' }} className='question-title py-3 w-100'>
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
                                </article>  */}


                            </section>
                        </div>
                    </main>
                </div>

                <div className="katalog_right">

                    <div className="top_cards_katalog">
                        {/* <KatalogObshi /> */}
                        <AllCatalog2 />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Catalog2