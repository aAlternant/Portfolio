import CartItem from '../../components/cartItem/CartItem'
import './cart.scss'
import { Links } from '../../components/Links'
import { Empty } from '../../components/empty/Empty'
import { Link } from 'react-router-dom'

function Cart({ items, onClickRemove, makeOrder }) {
  const valueOfItems = () => {
    let basicWord = "товар"
    if (items.length === 0 || items.length >= 5) return basicWord + "ов"
    if (items.length === 1) return basicWord
    if (items.length > 1 && items.length < 5) return basicWord + "a"
  }

  const getFullSummary = () => {
    if (items.length > 0) {
      return (
        items.reduce((accum, current) => (
          accum + current.price
        ), 0).toFixed(2)
      )
    } else {
      return 0
    }
  }

  const getFullDiscount = () => {
    if (items.length > 0) {
      return (
        items.reduce((accum, current) => (
          accum + current.discount
        ), 0).toFixed(2)
      )
    } else {
      return 0
    }
  }

  const getCurrentFullPrice = () => {
    if (items.length > 0) {
      return (
        (getFullSummary() - getFullDiscount()).toFixed(2)
      )
    } else {
      return 0
    }
  }


  return (
    <div className="cart" >
      <Links title="Корзина" />
      <h2>Корзина</h2>
      <div className="d-flex align-center">
        <img src="/img/checkbox.svg" alt="Checkbox" />
        <span className="ml-10">Выделить все</span>
        <span className="clearSelected ml-50">Удалить выбранные</span>
      </div>

      <div className="cartItemBlock">

        {
          items.length > 0 ?

            items.map(item => (
              <CartItem
                key={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                onClickRemove={() => onClickRemove(item.id)}
              />
            ))
            :
            <Empty
              img={"/img/empty-cart-unscreen.gif"}
              title="Тут совсем пусто. Думаю стоит что-то добавить!"
              styleName="emptyCart"
            />
        }

      </div>

      <div className="totalyBlock">
        <div className="promotionBlock">
          <input type="checkbox" name="" id="" />
          <span className="ml-10" style={{ color: "black" }}>Списать 200 ₽ </span>
          <p className="mt-20" style={{ color: "#8F8F8F" }}>На карте накопленно 200 ₽</p>
        </div>
        <div className="mathBlock">
          <div className="d-flex justify-between align-center ml-10 mr-10 mt-25">
            <span>{items.length} {valueOfItems()} </span>
            {getFullSummary()} ₽
          </div>
          <div className="d-flex justify-between align-center m-10 mb-25">
            <span>Скидка</span>
            <b style={{ color: "orangered" }}>-{getFullDiscount()} ₽</b>
          </div>
        </div>
        <div className="d-flex align-center justify-between m-10 pt-20">
          <span>Итог</span>
          <b style={{ fontSize: 24 }}>{getCurrentFullPrice()} ₽</b>
        </div>
        {
          items.length > 0 ?
            <Link to="/orders">
              <button className="btn" onClick={() => {
                makeOrder({
                  sum: getCurrentFullPrice(),
                  count: items.length,
                  status: "В обработке",
                  year: new Date().getFullYear(),
                  month: new Date().getMonth(),
                  day: new Date().getDate(),
                  items: items
                })
              }}>Оформить заказ</button>
            </Link>

            :

            <button className="btn" onClick={() => {
              makeOrder({
                sum: getCurrentFullPrice(),
                count: items.length,
                status: "В обработке",
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
                items: items
              })
            }}>Оформить заказ</button>
        }
      </div>

    </div>
  )
}

export default Cart