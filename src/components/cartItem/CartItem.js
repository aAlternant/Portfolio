import './cartitem.scss'

const CartItem = (props) => (
    <div className="incartItem d-flex">
        <img src={props.img} alt="Item" />
        <div>
            <h3 className="ml-10 mb-10">{props.title}</h3>
            <ul className="d-flex flex-row ml-10">
                <li className="ml-15"><b>{props.price.toFixed(2)} ₽</b></li>
                <li className="ml-10">за шт.</li>
            </ul>
            <div className="countBtn d-flex flex-row align-center justify-center">
                <img src="/img/minus.svg" alt="Minus" className="minus-svg" />
                <span>1</span>
                <img src="/img/plus.svg" alt="Plus" />
            </div>
            <p><b>{props.price.toFixed(2)} ₽</b></p>
            <img src="/img/remove-cross.png" alt="Remove" className='remove-cross' onClick={props.onClickRemove}/>
        </div>
    </div>
)

export default CartItem