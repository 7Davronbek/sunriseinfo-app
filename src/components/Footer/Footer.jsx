import React from 'react'
import './footer.css'
import Logo_1 from '../../image/Group.svg'
import { Link } from 'react-router-dom'
import {getText} from '../locales/index'

export default function Footer() {
    return (
        <>
            <div className="footer_head">
                <div className="footer">
                    <div className="fot_bootom">
                        <div className="footer_1">
                            <h1>{getText("footer1")}</h1>
                            <ul>
                                <li><span style={{ color: "#ffffff" }}>{getText("footer2")}.</span> <a href="tel: +998(97) 264-77-78">+998(97) 264-77-78</a></li>
                                <li><span style={{ color: "#ffffff" }}>{getText("footer3")}.</span> <a href="mailto: info@sunriseinfo.uz">info@sunriseinfo.uz</a></li>
                                <li><span style={{ color: "#ffffff" }}>{getText("footer4")}.</span><a href="https://yandex.uz/maps/10335/tashkent/house/YkAYdA9kQEcOQFprfX91dnhqZg==/?ll=69.284929%2C41.347493&z=16">{getText("footer5")}"</a></li>
                                <li className='politika'>{getText("footer6")}</li>
                            </ul>
                        </div>
                        <div className="footer_1 navigation">
                            <h1>{getText("footer7")}</h1>
                            <ul>

                                <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/"><li>{getText("navbar1")}</li></Link>
                                <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/katalog"><li>{getText("navbar7")}</li></Link>
                                <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/aboutUs"><li>{getText("navbar2")}</li></Link>
                                <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/ourwork"><li>{getText("navbar5")}</li></Link>
                                <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/contact"><li>{getText("navbar6")}</li></Link>

                            </ul>
                        </div>
                        <div className="footer_1">
                            <h1>{getText("footer8")}</h1>
                            <ul>
                                <li>{getText("footer9")}</li>
                                <li>{getText("footer10")}</li>
                                <li>{getText("footer11")}</li>
                            </ul>
                        </div>
                        <div>
                            <img src={Logo_1} className="log_navig" alt="" />
                        </div>
                    </div>



                    <div className="foot_second">
                        <div>
                            <img src={Logo_1} className="log_navig" alt="" />
                        </div>
                        <div className="navigakdf">
                            <div className="footer_1 navigation">
                                <h1>Навигации</h1>
                                <ul className='ul_foor'>
                                    <div>
                                        <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/"><li>Главная</li></Link>
                                        <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/katalog"><li>Каталог</li></Link>
                                        <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/aboutUs"><li>О нас</li></Link>
                                    </div>
                                    <div>
                                        <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/ourwork"><li>Наши работы</li></Link>
                                        <Link style={{ textDecoration: "none", color: "#ffffffb8" }} to="/contact"><li>Контакты</li></Link>

                                    </div>
                                </ul>
                            </div>
                            <div className="footer_1 ther_sec">
                                <h1>Соцсети</h1>
                                <ul>
                                    <div><li>Инстаграм</li>
                                        <li>Телеграм</li></div>
                                    <div><li>Фейсбук</li></div>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_1 sec_for">
                            <h1>Контакты</h1>
                            <ul>
                                <li><span style={{ color: "#ffffff" }}>Тел.</span> <a href="tel: +998(99) 814-01-15">+998 (99) 814-01-15</a></li>
                                <li><span style={{ color: "#ffffff" }}>Почта.</span> <a href="mailto: info@sunriseinfo.uz">info@sunriseinfo.uz</a></li>
                                <li><span style={{ color: "#ffffff" }}>Адрес.</span><a href="https://yandex.uz/maps/10335/tashkent/house/YkAYdA9kQEcOQFprfX91dnhqZg==/?ll=69.284929%2C41.347493&z=16">Адресс. г.Ташкент, Юнусабадский район, ССГ “Ифтихор”, ул.Ифтихор №1</a></li>
                                <li className='politika'>Политика конфедициальности</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
