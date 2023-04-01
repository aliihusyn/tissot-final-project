import React from "react";

const ShopCard = ({ imageUrl, title, price, type, onClick }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={`http://localhost:5000/${imageUrl}`} alt="" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{title}</h3>
        <p className="product-type">{type}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
