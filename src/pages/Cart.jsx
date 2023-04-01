import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//icons
import { BiPurchaseTag } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";

//Components
import Button from "../components/Button";
import CartCard from "../components/CartCard";

//Context
import { MainContext, useContext } from "../utils/MainContext";

const Cart = () => {
  const { cart, total } = useContext(MainContext);
  return (
    <section className="cart">
      <div className="container">
        <div className="cart-row">
          <h2>shopping cart</h2>
          {cart?.length === 0 ? (
            <div className="cart-empty">
              <h4>You have no items in your shopping basket.</h4>
              <Link to="/products">
                <Button className="cart-button btn">back to shop</Button>
              </Link>
            </div>
          ) : (
            <div className="products">
              <div className="product">
                {cart?.map((item) => {
                  return <CartCard data={item} key={item.id} />;
                })}
              </div>
              <div className="summary-box">
                <ul className="sum-list">
                  <li className="sum-title">order summary</li>
                  <li className="total-price">
                    <p className="total">total</p>
                    <p className="tot-price">$ {total}</p>
                  </li>
                  <li className="checkboxes">
                    <div className="check-row">
                      <input type="checkbox" value={false} />

                      <p>
                        <BiPurchaseTag /> I have a promo code
                      </p>
                    </div>
                    <div className="check-row">
                      <input type="checkbox" value={true} />

                      <p>
                        <FiShoppingBag /> I want a gift bag
                      </p>
                    </div>
                    <div className="check-row">
                      <input type="checkbox" value={false} />

                      <p>
                        <AiOutlineGift /> This is a gift
                      </p>
                    </div>
                  </li>
                  <li className="summary-button">
                    <Button className="summary-btn btn">
                      proceed to checkout
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
