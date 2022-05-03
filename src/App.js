import Header from "./components/Header";
import React, { useState, useEffect } from 'react'
import Main from "./scenes/main/Main";
import Cart from "./scenes/cart/Cart";
import axios from "axios";
import { Route } from "react-router-dom";
import Favorites from "./scenes/favorites/Favorites";

// const AppContext = createContext({});

function App() {

  // const [cartOpened, setCartStatus] = useState(false)
  const [inCartItems, setCartItems] = useState([])
  const [searchValue, setSearch] = useState('')
  const [favorites, setFavoritesList] = useState([])
  const [items, setItemsList] = useState([])
  const [loadStatus, setLoadStatus] = useState(true)

  const backUrlCart = "https://626d63f2e58c6fabe2d4dc9a.mockapi.io/cart"
  const backUrlFavorites = "https://626d63f2e58c6fabe2d4dc9a.mockapi.io/favorites"

  const onChangeSearchInput = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const cartList = await axios.get(backUrlCart);
        setCartItems(cartList.data)
        const favoriteList = await axios.get(backUrlFavorites);
        setFavoritesList(favoriteList.data)
      } catch (error) {
        try {
          const favoriteList = await axios.get(backUrlFavorites);
          setFavoritesList(favoriteList.data)
        } catch (error) {
          console.log("Избранные пусты")
        }
        console.log("Корзина пуста")
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
        const { data } = await axios.post(backUrlCart, item)
        setCartItems(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалость добавить в корзину")
    }
  }

  const onAddToFavorite = async (item) => {
    try {
      if (favorites.find(obj => obj.id === item.id)) {
        axios.delete(backUrlFavorites + `/${item.id}`)
        setFavoritesList(prev => prev.filter(obj => obj.id !== item.id))
      } else {
        const { data } = await axios.post(backUrlFavorites, item)
        setFavoritesList(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалось добавить в избранное")
    }
  }

  const removeItem = (id) => {
    axios.delete(backUrlCart + `/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div className="wrapper clear mt-40 mb-40">
      <Header
        itemsAmount = {inCartItems.length}
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}

      />
      <Route path="/cart" exact>
        <img src="/img/banner.svg" alt="Тут был баннер"></img>
        <Cart

          onClickRemove={removeItem}
          items={inCartItems}

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
          loading = {loadStatus}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          onAddToFavorite={onAddToFavorite}
          setFavoritesList={setFavoritesList}
          items={favorites}
        />
      </Route>
    </div>
  )
}

export default App;
