import './orders.scss';

export function OrderItem(props) {
    return (
        <div className="order-item">
            <img src={props.img} alt="Item" />
            <div className="prices d-flex flex-row">
                <div className="classicPrice">
                    <p>{props.price.toFixed(2)} ₽</p>
                    <span>Цена</span>
                </div>
                <div className="count">
                    <p>{props.count}</p>
                    <span>Количество</span>
                </div>
            </div>
            <h5 className="ml-15">{props.title}</h5>
            <div className="starsBlock">
                <img src="/img/rating.svg" alt="Rating" className="rating" />
            </div>
        </div>
    )
}