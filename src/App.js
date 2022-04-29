import Header from "./components/Header";
import Item from "./components/Item";


function App() {
  return (
    <div className="wrapper clear mt-40 mb-40">
    <Header />
    <img src="/img/banner.svg" alt="Тут был баннер"></img>
   <div className="content">
        <h3 className="">Акции</h3>
        <div className="itemBlock d-flex">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
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


    </div>
  )
}

export default App;
