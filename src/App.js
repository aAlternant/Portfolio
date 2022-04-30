import Header from "./components/Header";
import React, { useState } from 'react'
import Main from "./scenes/main/Main";
import Cart from "./scenes/cart/Cart";

function App() {

  const [cartOpened, setCartStatus] = useState(false)

  return (
    <div className="wrapper clear mt-40 mb-40">
      <Header onClickCart={() => setCartStatus(true)} onClickLogo={() => setCartStatus(false)} />
      <img src="/img/banner.svg" alt="Тут был баннер"></img>
      {cartOpened ? <Cart /> : <Main key="cart" />}

    </div>
  )
}

export default App;
