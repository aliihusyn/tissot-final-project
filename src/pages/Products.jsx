import React from "react";
import { Link } from "react-router-dom";

//images
import watch1 from "../assets/images/home/man/manwatch4.webp";

//Components
import ShopCard from "../components/ShopCard";

//Context
import { MainContext, useContext } from "../utils/MainContext";

const Products = () => {
  const { products } = useContext(MainContext);

  return (
    <>
      <section className="category-info">
        <div className="products-row">
          <div className="products-left"></div>
          <div className="products-right">
            <h2>Classic</h2>
            <p>
              The fine craftsmanship put into the T-Classic collection can be
              found in abundance. Tissot strives to provide accuracy and quality
              at every level, no collection embodies this better than the time
              pieces found in this collection.”
            </p>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products">
            {products.map((product) => {
              return (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <ShopCard
                    imageUrl={product.productImage}
                    title={product.name}
                    price={product.price}
                    type={product.type}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
