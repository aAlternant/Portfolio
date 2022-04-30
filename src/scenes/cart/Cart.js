import './cart.scss'

function Cart() {
  return (
      <div className="cart" >
        <h2>Корзина</h2>
        <div className="d-flex align-center">
          <img src="/img/checkbox.svg" alt="Checkbox" />
          <span className="ml-10">Выделить все</span>
          <span className="clearSelected ml-50">Удалить выбранные</span>
        </div>

        <div className="cartItemBlock">


          <div className="incartItem d-flex">
            <img src="/img/item.jpg" alt="Item" />
            <div>
              <h3 className="ml-10 mb-10"> Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h3>
              <ul className="d-flex flex-row ml-10">
                <li className="ml-15"><b>44,50 ₽</b></li>
                <li className="ml-10">за шт.</li>
              </ul>
              <div className="countBtn d-flex flex-row align-center justify-center">
                <img src="/img/minus.svg" alt="Minus" className="minus-svg" />
                <span>2</span>
                <img src="/img/plus.svg" alt="Plus" />
              </div>
              <p><b>89,00 ₽</b></p>
            </div>
          </div>


          <div className="incartItem d-flex">
            <img src="/img/item.jpg" alt="Item" />
            <div>
              <h3 className="ml-10 mb-10"> Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h3>
              <ul className="d-flex flex-row ml-10">
                <li className="ml-15"><b>44,50 ₽</b></li>
                <li className="ml-10">за шт.</li>
              </ul>
              <div className="countBtn d-flex flex-row align-center justify-center">
                <img src="/img/minus.svg" alt="Minus" className="minus-svg" />
                <span>2</span>
                <img src="/img/plus.svg" alt="Plus" />
              </div>
              <p><b>89,00 ₽</b></p>
            </div>
          </div>


        </div>

        <div className="totalyBlock">
          <div className="promotionBlock">
            <input type="checkbox" name="" id="" />
            <span className="ml-10" style={{ color: "black" }}>Списать 200 ₽ </span>
            <p className="mt-20" style={{ color: "#8F8F8F" }}>На карте накопленно 200 ₽</p>
          </div>
          <div className="mathBlock">
            <div className="d-flex justify-between align-center ml-10 mr-10 mt-25">
              <span>3 товара</span>
              1059,10 ₽
            </div>
            <div className="d-flex justify-between align-center m-10 mb-25">
              <span>Скидка</span>
              <b style={{ color: "orangered" }}>-8,01 ₽</b>
            </div>
          </div>
          <div className="d-flex align-center justify-between m-10 pt-20">
            <span>Итог</span>
            <b style={{ fontSize: 24 }}>1051,09 ₽</b>
          </div>
          <button className="btn">Оформить заказ</button>
        </div>

      </div>
  )
}

export default Cart