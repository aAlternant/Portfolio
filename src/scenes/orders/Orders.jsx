import { Empty } from "../../components/empty/Empty"
import { Links } from "../../components/Links"
import { Order } from "./Order"
import './orders.scss'

export function Orders({ orderList, clearOrders }) {
  return (
    <div className="orders-block">
      <Links title="Заказы" />
      <div className="d-flex">
        <h1>Заказы</h1>
        <button className="clearOrders" onClick = {() => clearOrders()}>Очистить список</button>
      </div>
      {
        orderList.length > 0 ?

          orderList.map((item) => (
            <Order
              id={item.id}
              sum={item.sum}
              count={item.count}
              status={item.status}
              year={item.year}
              month={item.month}
              day={item.day}
              orderItems={item.items}
            />
          ))
          :

          <Empty
            img="https://cdn.pixabay.com/photo/2020/12/30/01/45/smile-5872116_640.png"
            title="Пусто! Самое время что-то заказать!"
            styleName="emptyOrder"
          />
      }
    </div>
  )
}
