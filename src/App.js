import { useState, useEffect } from "react";
//Router
import { Route, Routes } from "react-router-dom";

//axios
import axios from "axios";

//context
import { MainContext } from "./utils/MainContext";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData();
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setTotal(totalPrice);
  }, [cart]);

  const getData = async () => {
    try {
      await axios.get("http://localhost:5000/api/products").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (newProduct) => {
    const checkExisting = cart.find((product) => product.id === newProduct.id);
    if (checkExisting) {
      const nonExisting = cart.filter(
        (product) => product.id !== newProduct.id
      );
      setCart(() => [
        ...nonExisting,
        { ...checkExisting, quantity: checkExisting.quantity + 1 },
      ]);
    } else {
      setCart((prev) => [...prev, { ...newProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  const increment = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  const decrement = (id) => {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  };

  const globalStates = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    total,
    setTotal,
  };

  return (
    <MainContext.Provider value={globalStates}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MainContext.Provider>
  );
};

export default App;
