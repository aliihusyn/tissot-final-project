//Context
import { MainContext, useContext } from "../utils/MainContext";

import { RiDeleteBin6Line } from "react-icons/ri";

const CartCard = ({ data }) => {
  const { removeFromCart, increment, decrement, total, setTotal } = useContext(MainContext);

  return (
    <div className="cartCard" id={data.id}>
      <div className="cardImg">
        <img
          src={`http://localhost:5000/${data.productImage}`}
          alt={data.name}
        />
      </div>
      <div className="cardInfo">
        <h3 className="cardTitle">{data.name}</h3>
        <p className="type">{data.type}</p>
        <div className="quantityPrice">
          <div className="quantity">
            <span
              className="inc"
              onClick={() => {
                if (data.quantity > 1) {
                  decrement(data.id);
                  setTotal(total - data.price);
                } else {
                  return;
                }
              }}
            >
              -
            </span>
            <span className="quant">{data.quantity}</span>
            <span
              className="dec"
              onClick={() => {
                increment(data.id);
                setTotal(total + data.price);
              }}
            >
              +
            </span>
          </div>
          <p className="cardPrice">$ {data.price}</p>
        </div>
      </div>
      <button
        className="cart-btn"
        onClick={() => {
          removeFromCart(data.id);
        }}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default CartCard;
