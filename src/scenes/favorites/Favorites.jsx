import Item from "../../components/item/Item"

function Favorites({items, onAddToFavorite, onRemoveFromFavorite}) {
    return (
    <div className="content">
        <div className="itemBlock d-flex">
        {
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
            />
          ))
        }
        </div>
    </div>
    )
}

export default Favorites