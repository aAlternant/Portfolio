import './item.scss'
import React, { useState, useEffect } from 'react';

function Item(props) {

    const [inCart, setCart] = useState(false)
    const [isFavorite, setFavorite] = useState(false)

    const onClickButton = () => {
        props.onButtonClick();
        setCart(true)
    }

    useEffect(() => {
        if (props.isFavorite || props.isInFavorite) setFavorite(true)
        if (props.isInCart) setCart(true)
// eslint-disable-next-line
    }, [])

    const onAddToFavorite = () => {
        props.onAddToFavorite();
        setFavorite(!isFavorite)
    }

    return (
        <div className="item">
            {
                isFavorite ?
                    <img onClick={onAddToFavorite} src="/img/red-heart.svg" className="markedSvg" alt="Favorite" />
                    :
                    <img onClick={onAddToFavorite} src='/img/heart.svg' className='markedSvg' alt='NonFavourite' />
            }
            <img src={props.img} alt="Item" />
            <div className="discount-card">
                <span><b>-{props.getProcents}%</b></span>
            </div>
            <div className="prices d-flex">
                <div className="modPrice">
                    <b className="d-block">{(props.price - props.discount).toFixed(2)} ₽</b>
                    <span>По скидке</span>
                </div>
                <div className="classicPrice">
                    <p>{props.price.toFixed(2)} ₽</p>
                    <span>Обычная</span>
                </div>
            </div>
            <h5 className="ml-15 mr-5">{props.title}</h5>
            <div className="starsBlock">
                <img src="/img/rating.svg" alt="Rating" className="rating" />
            </div>
            <button className={inCart ? "disabled-button" : "button"} onClick={onClickButton}>{inCart ? "Уже в корзине" : "В корзину"}</button>
        </div>
    )
}

export default Item;