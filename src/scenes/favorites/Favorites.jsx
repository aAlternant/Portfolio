import { Empty } from "../../components/empty/Empty"
import Item from "../../components/item/Item"
import { Links } from "../../components/Links"

function Favorites({items, onAddToFavorite}) {
    return (
    <div className="content">
      <Links title = "Избранное"/>
      <h2>Избранное</h2>
        <div className="itemBlock d-flex">
        {
          items.length > 0 ? 

          items
          .map((item) => (
            <Item
              onAddToFavorite = {() => onAddToFavorite(item)}
              isFavorite
              key = {item.title}
              title={item.title}
              price={+item.price}
              discount={+item.discount}
              img={item.img}
              getProcents = {Math.round(item.discount*100/item.price)}
            />
          ))

          :

          <Empty 
            img = "https://media0.giphy.com/media/mAJj3GMb0urNTj18tT/giphy.gif"
            title = "У вас до сих пор нет любимых товаров?"
            styleName = "emptyFavorites"
          />
        }
        </div>
    </div>
    )
}

export default Favorites