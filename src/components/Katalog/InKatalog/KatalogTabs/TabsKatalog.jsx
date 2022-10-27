import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'
import { API_PATH } from "../../../../tools/constants";
import './TabsKatalog.css'

function TabsKatalog({ product }) {
    const [toggleState, setToggleState] = useState(1);
    const [rating, setRating] = useState(null)
    const [disable, setDisable] = useState(false)

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const postStars = async (e) => {
        await axios.post(API_PATH + '/main/rate/', { rate: e, product: product.id })
            .then((res) => {
                setDisable(true)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        setDisable(false)
    }, [])

    return (
        <div className="tab_cotae">
            <div className="containerTabs">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Общая инфо.
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        <p className="sorachem">Характеристики</p>
                        <p className="sorashenya">Харак-ки</p>
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Отзывы.
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>{product?.name}</h2>
                        <hr />
                        <p>
                            {product?.description}
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>{product?.name}</h2>
                        <hr />
                        <ul>
                            {product.attribute_product && product.attribute_product.map((item, index) => (
                                <li key={index}><span>{item.key} ...............</span> {item.value}</li>
                            ))}

                        </ul>


                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>{product?.name}</h2>
                        <hr />

                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (<label>
                                <input
                                    type="radio"
                                    name="rating"
                                    disabled={disable}
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                    onChange={(e) => postStars(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    color={ratingValue <= rating ? 'yellow' : 'silver'}
                                />
                            </label>
                            )
                        })}

                        {/* <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue + 1}
                            />
                            <FaStar
                                className="star"
                                color={'red'}
                            />
                        </label>
                        <label>
                            <input type="radio" name="rating" value={ratingValue + 2} />
                            <FaStar
                                className="star"
                                color={'red'}
                            />
                        </label> */}



                        {/* {product?.description} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsKatalog;
