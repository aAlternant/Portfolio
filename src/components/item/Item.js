import './item.scss'
import React, { useState } from 'react';

function Item(props) {
    
    const [inCart, setCart] = useState(false)

    const onClickButton = () => {
        setCart(true)
    }

    return (
        <div className="item">
            <svg onClick={props.onClickHeart} width="32" height="32" className="markedSvg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F3F2F1" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7046 8.25644C17.8299 7.13067 19.3564 6.49817 20.9482 6.49817C22.5399 6.49817 24.0664 7.13063 25.1916 8.25636C26.3174 9.38164 26.95 10.9083 26.95 12.5C26.95 14.0917 26.3175 15.6183 25.1917 16.7435C25.1917 16.7436 25.1917 16.7435 25.1917 16.7435L16.3517 25.5835C16.1565 25.7788 15.8399 25.7788 15.6446 25.5835L6.80461 16.7435C4.46096 14.3999 4.46096 10.6001 6.80461 8.25644C9.14826 5.91279 12.9481 5.91279 15.2917 8.25644L15.9982 8.96289L16.7046 8.25644C16.7046 8.25641 16.7046 8.25647 16.7046 8.25644ZM20.9482 7.49817C19.6217 7.49817 18.3496 8.02528 17.4118 8.96346L16.3517 10.0235C16.258 10.1173 16.1308 10.17 15.9982 10.17C15.8656 10.17 15.7384 10.1173 15.6446 10.0235L14.5846 8.96355C12.6315 7.01042 9.46484 7.01042 7.51172 8.96355C5.55859 10.9167 5.55859 14.0833 7.51172 16.0364L15.9982 24.5229L24.4846 16.0364C25.4228 15.0987 25.95 13.8265 25.95 12.5C25.95 11.1735 25.4229 9.90138 24.4847 8.96363C23.5469 8.02544 22.2747 7.49817 20.9482 7.49817Z" fill="#414141" />
                </g>
            </svg>
            <img src={props.img} alt="" />
            <div className="prices d-flex flex-row">
                <div className="modPrice">
                    <b className="d-block">{(props.price - props.discount).toFixed(2)} ₽</b>
                    <span>С картой</span>
                </div>
                <div className="classicPrice">
                    <p>{props.price.toFixed(2)} ₽</p>
                    <span>Обычная</span>
                </div>
            </div>
            <h5 className="ml-15">{props.title}</h5>
            <div className="starsBlock">
                <img src="/img/rating.svg" alt="Rating" className="rating" />
            </div>
            <button className={inCart ? "disabled-button" : "button"} onClick={onClickButton}>В корзину</button>
        </div>
    )
}

export default Item;