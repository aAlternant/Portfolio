import Item from "../../components/item/Item"
import ContentLoader from 'react-content-loader';
// import { useState, useEffect } from 'react'
// import axios from "axios";

function Main(props) { 
  const getProcents = (item) => (
    Math.round(item.discount*100/item.price)
  )

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
              getProcents = {getProcents(item)}
            />
          ))
        }
      </div>
      <div>
        <h2>Специальные предложения</h2>
        <div className="d-flex flex-row align-center">
          <img src="/banners/card-banner1.svg" className="pt-15" alt="Банер" />
          <img src="/banners/card-banner2.svg" alt="Банер" />
        </div>
      </div>
      <div className="mapsBlock">
        <h2>Наши магазины</h2>
        <iframe className="mb-15" title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.631029127511!2d41.354497097980534!3d56.86942259883896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d0bae187a68f1%3A0xdbd781d124e7cc59!2z0J_RgNC-0LTRg9C60YLRiyDQnNCw0LPQsNC30LjQvSDQodC10LLQtdGA0Y_QvdC-0YfQutCw!5e0!3m2!1sru!2sbg!4v1651824753329!5m2!1sru!2sbg" width={1200} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Main