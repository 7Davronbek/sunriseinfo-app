import React from 'react'
import './homeSecond.css';
import HomeSecondImg from '../../../image/Rectangle 17.png'
import { Link } from 'react-router-dom';

export default function HomeSecond() {
    return (
        <>
            <div className="home_second">
                <div className="home_flex_second">
                    <div data-aos="fade-up" className="home_second_left">
                        <h1 className='abput_h1'>О нас</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis quisque quisque at at adipiscing. Nibh pharetra, consequat lectus arcu vestibulum risus, purus commodo. Hendrerit sagittis turpis at nec posuere blandit montes.
                            <br />
                            <br />
                            Scelerisque pellentesque felis, lorem aliquet nam dignissim. Libero iaculis pellentesque nam ac elit convallis feugiat aliquam. Tempus nunc, nunc orci, amet nulla tellus.</p>
                        <Link style={{ textDecoration: "none", color: "#ff7e00" }} to="/aboutUs"><p className='see_mokre_text'>See More</p></Link>
                    </div>
                    <div data-aos="fade-up" className="home_second_right">
                        <img src={HomeSecondImg} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
