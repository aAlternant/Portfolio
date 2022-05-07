import { Link } from "react-router-dom";

export function Empty({ img, title, styleName }) {
  return (
    <div className={`${styleName} d-flex flex-column align-center`}>
      <img src={img} alt="Empty Cart" />
      <b>{title}</b>
      <Link to="/">
        <button>
          <img src="/img/arrow-in-emptycart.png" className="arrow" alt="Arrow" />
          Вернуться
        </button>
      </Link>
    </div>
  )
}