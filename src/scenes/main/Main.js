import Item from "../../components/item/Item"
import { useState, useEffect } from 'react'

const backUrl = "https://626d63f2e58c6fabe2d4dc9a.mockapi.io/items"

function Main() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(backUrl);
      const data = await response.json();
      console.log("EffectUsed")
      setItems(data)
    }
    fetchItems()
  }, []);

  return (
    <div className="content">
      <h3 className="">Акции</h3>
      <div className="itemBlock d-flex">
        {
          items.map((item) => (
            <Item
              key = {item.title}
              title={item.title}
              price={+item.price}
              discount={+item.discount}
              img={item.img}
            />
          ))
        }
      </div>

      <h2>Новинки</h2>
      ...
      <h2>Покупали раньше</h2>
      ...
      <div>
        <h2>Специальные предложения</h2>
        <div className="specialCart">
          <svg />
          <h3>Оформите карту "Северяночка"</h3>
          <p>И получайте бонусы при покупке \n в магазинах и на сайте</p>
        </div>
      </div>
      <div className="mapsBlock">
        <h2>Наши магазины</h2>
        <div className="map"></div>
      </div>
    </div>
  )
}

export default Main