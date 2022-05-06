import { Order } from "./Order"
import './orders.scss'

export function Orders({ orderList }) {
  return (
      <div className="orders-block">
      <h1>Заказы</h1>
        {orderList.map((item) => (
          <Order
            id={item.id}
            sum={item.sum}
            count={item.count}
            status={item.status}
            year={item.year}
            month={item.month}
            day={item.day}
            orderItems = {item.items}
          />
        ))}
      </div>
  )
}
