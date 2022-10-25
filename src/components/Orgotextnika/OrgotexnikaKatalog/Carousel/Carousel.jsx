import React, { Component } from "react";
import Slider from "react-slick";
import Card_1 from '../../../../image/image 3.png'
import Card_2 from '../../../../image/image 4.png'
import Card_3 from '../../../../image/image 5 (1).png'
import Card_4 from '../../../../image/image 5.png'
import '../orgotexnikaKatalog.css';
import serdechka from '../../../../image/Union.svg';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="img_carousel_1">
                        <div className="image_carousel">
                            <img src={Card_1} alt="" />
                        </div>
                        <p>Cursus eget id elit consequat dolor.</p>
                        <div className="btn_sotsh">
                            <button className="sena_send btn_sol">1 500 000 сум</button>

                            <button className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                        </div>
                    </div>
                    <div className="img_carousel_1">
                        <div className="image_carousel">
                            <img src={Card_2} alt="" />
                        </div>
                        <p>Erat urna sed viverra mauris eu.</p>
                        <div className="btn_sotsh">
                            <button className="sena_send btn_sol">15 455 000 сум</button>

                            <button className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                        </div>
                    </div>
                    <div className="img_carousel_1">
                        <div className="image_carousel padd_img">
                            <img src={Card_3} alt="" />
                        </div>
                        <p>Quis massa pulvinar quam.</p>
                        <div className="btn_sotsh">
                            <button className="sena_send btn_sol">700 000 сум</button>

                            <button className="bnt-serdechka"><img src={serdechka} alt="" /></button>
                        </div>
                    </div>
                    <div className="img_carousel_1">
                        <div className="image_carousel padd_img">
                            <img src={Card_4} alt="" />

                        </div>
                        <p>Molestie aliquet purus amet amet.</p>
                        <div className="btn_sotsh">
                            <button className="sena_send btn_sol">700 000 сум</button>
                            <button className="bnt-serdechka"><img src={serdechka} alt="" /></button>

                        </div>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}