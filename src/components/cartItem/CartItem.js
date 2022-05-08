import './cartitem.scss'

function CartItem({ img, price, title, count, onClickRemove, discount, setCountPlus, setCountMinus }) {

    // if (count < 1) count = 1

    return (
        <div className="incartItem d-flex">
            <img src={img} alt="Item" />
            <div>
                <h3 className="ml-10 mb-10">{title}</h3>
                <ul className="d-flex flex-row ml-10">
                    <li className="ml-15"><b style={{color:'orangered'}}>{(price-discount).toFixed(2)} ₽</b></li>
                    <li className="ml-10">за шт.</li>
                </ul>
                <div className="countBtn d-flex flex-row align-center justify-center">
                    <div className="minus-count" onClick = {() => count > 1 ? setCountMinus() : 1}>
                        <img src="/img/minus.svg" className='minus-svg' alt="Minus" />
                    </div>
                    <span>{count}</span>
                    <img src="/img/plus.svg" alt="Plus" className = "plus-count" onClick={() => setCountPlus()} />
                </div>
                <p><b>{((price-discount)*count).toFixed(2)} ₽</b></p>
                <img src="/img/remove-cross.png" alt="Remove" className='remove-cross' onClick={onClickRemove} />
            </div>
        </div>)
}

export default CartItem