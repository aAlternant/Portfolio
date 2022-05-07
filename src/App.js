import Header from "./components/Header";
import React, { useState, useEffect } from 'react'
import Main from "./scenes/main/Main";
import Cart from "./scenes/cart/Cart";
import axios from "axios";
import { Route } from "react-router-dom";
import Favorites from "./scenes/favorites/Favorites";
import { Orders } from "./scenes/orders/Orders";
import { Switch } from "react-router-dom";

function App() {

  const [inCartItems, setCartItems] = useState([])
  const [searchValue, setSearch] = useState('')
  const [favorites, setFavoritesList] = useState([])
  const [items, setItemsList] = useState([])
  const [loadStatus, setLoadStatus] = useState(true)
  const [orderList, setOrderList] = useState([])

  const backUrl = "https://626d63f2e58c6fabe2d4dc9a.mockapi.io"

  const onChangeSearchInput = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const cartList = await axios.get(backUrl + "/cart");
        setCartItems(cartList.data)
        const favoriteList = await axios.get(backUrl + "/favorites");
        setFavoritesList(favoriteList.data)
      } catch (error) {
        try {
          const favoriteList = await axios.get(backUrl + "/favorites");
          setFavoritesList(favoriteList.data)
        } catch (error) {
          console.log("Избранные пусты")
        }
        console.log("Корзина пуста")
      }
      try {
        const ordersReponse = await axios.get(backUrl + "/orders");
        setOrderList(ordersReponse.data)
      } catch (error) {
        console.log("В заказах пусто")
      }
      finally {
        const itemlist = await axios.get("https://626d63f2e58c6fabe2d4dc9a.mockapi.io/items")
        setItemsList(itemlist.data)
        setLoadStatus(false)
      }
    };
    fetchData();
  }, [])

  const onButtonClick = async (item) => {
    try {
      if (inCartItems.find(obj => obj.title === item.title)) {
        return
      } else {
        const { data } = await axios.post(backUrl + "/cart", item)
        setCartItems(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалость добавить в корзину")
    }
  }

  const onAddToFavorite = async (item) => {
    try {
      if (favorites.find(obj => obj.id === item.id)) {
        axios.delete(backUrl + `/favorites/${item.id}`)
        setFavoritesList(prev => prev.filter(obj => obj.id !== item.id))
      } else {
        const { data } = await axios.post(backUrl + "/favorites", item)
        setFavoritesList(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалось добавить в избранное")
    }
  }

  const removeItem = (id) => {
    axios.delete(backUrl + `/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const makeOrder = async (item) => {
    if (item.items.length > 0) {
      try {
        const { data } = await axios.post(backUrl + "/orders", item)
        setOrderList(prev => [...prev, data])
        alert("Заказ успешно сформирован!")
        let list = inCartItems.slice()
        setCartItems([])
        for (let i = 0; i < list.length; i++) {
          await axios.delete(backUrl + `/cart/${list[i].id}`)
        }
      } catch (error) {
        alert("Не удалось сформировать заказ")
      }
    }
    else {
      alert("Ошибка! Корзина пуста!")
    }
  }

  const clearOrders = async () => {
    for (let i = 1; i < orderList.length+1; i++) {
      await axios.delete(backUrl + `/orders/${i}`)
    }
    setOrderList([])
  }

  return (
    <div className="wrapper clear mt-40 mb-40">
      <Header
        itemsAmount={inCartItems.length}
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}

      />
      <Switch>
        <Route path="/cart" exact>
          <img src="/img/banner-2.svg" alt="Тут был баннер"></img>
          <Cart

            onClickRemove={removeItem}
            items={inCartItems}
            makeOrder={makeOrder}

          />
        </Route>
        <Route path="/" exact>
          <img src="/img/banner.svg" alt="Тут был баннер"></img>
          <Main
            items={items}
            inCartItems={inCartItems}
            inFavoriteItems={favorites}
            onAddToFavorite={onAddToFavorite}
            onButtonClick={onButtonClick}
            searchValue={searchValue}
            loading={loadStatus}
          />
        </Route>
        <Route path="/favorites" exact>
          <img src="/img/banner.svg" alt="Тут был баннер" />
          <Favorites
            onAddToFavorite={onAddToFavorite}
            setFavoritesList={setFavoritesList}
            items={favorites}
          />
        </Route>
        <Route path="/orders" exact>
          <img src="/img/banner-2.svg" alt="Тут был баннер" />
          <Orders
            orderList={orderList}
            clearOrders = {clearOrders}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
