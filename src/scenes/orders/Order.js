import "./orders.scss"
import { OrderItem } from "./OrderItem"

export function Order({ id, sum, count, status, day, month, year, orderItems }) {
    return (
        <div className="order">
            <h3>Заказ №{id}</h3>
            <div className="data d-flex flex-row align-center">
                <b className="mr-15">{`${day > 10 ? day : `0${day}`}.${month > 10 ? month : `0${month}`}.${year}`}</b>
                <b>11:00-14:00</b>
                <div className="status-bar">
                    {status}
                </div>
                <div className="additional-info">
                    <span>{sum} ₴</span>
                    <button>
                        <img src="/img/refresh-cw.svg" alt="refresh" />
                        Повторить заказ
                    </button>
                </div>
            </div>
            <div className="item-block">
                {orderItems.map(item => (
                    <OrderItem
                        title={item.title}
                        price={item.price - item.discount}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}