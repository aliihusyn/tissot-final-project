import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//components
import Button from "../components/Button";

//Context
import { MainContext, useContext } from "../utils/MainContext";

//images
import extraimg1 from "../assets/images/home/man/manwatch1.avif";
import extraimg2 from "../assets/images/home/man/manwatch2.avif";
import extraimg3 from "../assets/images/home/man/manwatch3.avif";
import extraimg4 from "../assets/images/home/man/manwatch4.webp";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  const { addToCart } = useContext(MainContext);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    axios
      .get(`http://localhost:5000/api/products/${productID}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-row">
            <div className="single-left">
              <img
                src={`http://localhost:5000/${product?.productImage}`}
                alt="watch"
              />
            </div>
            <div className="single-right">
              <h2>{product?.name}</h2>
              <div
                className="details"
                dangerouslySetInnerHTML={{ __html: product?.details }}
              ></div>
              <div className="extra-images">
                <img className="img1" src={extraimg1} alt="watch" />
                <img className="img2" src={extraimg2} alt="watch" />
                <img className="img3" src={extraimg3} alt="watch" />
                <img className="img4" src={extraimg4} alt="watch" />
                <div className="more">
                  <span>+10</span>
                </div>
              </div>
              <p>${product?.price}</p>
              <Link to="/cart">
                <Button
                  className="singleProduct-btn btn"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  add to basket
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
