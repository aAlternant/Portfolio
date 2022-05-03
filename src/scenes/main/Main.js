import Item from "../../components/item/Item"
import ContentLoader from 'react-content-loader';
// import { useState, useEffect } from 'react'
// import axios from "axios";

function Main(props) {
  return (
    <div className="content">
      <h3 className="">{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : 'Акции'}</h3>
      <div className="itemBlock d-flex">
        {props.loading ? 
          [...Array(8)].map(() => (
        <div className="item">
            <ContentLoader
            speed={2}
            width={272}
            height={349}
            viewBox="0 0 272 349"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="14" y="28" rx="0" ry="0" width="248" height="146" />
            <rect x="167" y="229" rx="0" ry="0" width="0" height="1" />
            <rect x="15" y="189" rx="0" ry="0" width="55" height="25" />
            <rect x="27" y="218" rx="0" ry="0" width="31" height="12" />
            <rect x="193" y="190" rx="0" ry="0" width="55" height="25" />
            <rect x="205" y="219" rx="0" ry="0" width="31" height="12" />
            <rect x="13" y="300" rx="10" ry="10" width="246" height="40" />
            <circle cx="34" cy="280" r="8" />
            <circle cx="56" cy="280" r="8" />
            <circle cx="77" cy="280" r="8" />
            <circle cx="99" cy="280" r="8" />
            <circle cx="121" cy="280" r="8" />
        </ContentLoader>
        </div>
          ))
          :
          props.items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
          .map((item) => (
            <Item
              isInCart = {props.inCartItems.some(obj => obj.title === item.title)}
              isInFavorite = {props.inFavoriteItems.some(obj => obj.title === item.title)}
              isFavorite = {false}
              onAddToFavorite = {() => props.onAddToFavorite(item)}
              onButtonClick = {props.onButtonClick}
              key = {item.title}
              title={item.title}
              price={+item.price}
              discount={+item.discount}
              img={item.img}
              loading = {props.loading}
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