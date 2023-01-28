import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/header/Header";
import { useState, createContext, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const CartContext = createContext();

export default function App({ Component, pageProps }) {
  const [cartLength, setCartLength] = useState(0);
  
  useEffect(() => {
    const old = JSON.parse(window.localStorage.getItem("cartDetails")) || [];
    setCartLength(old.length);
  }, []);

  const addToCartHandler = (data) => {
    const old = JSON.parse(window.localStorage.getItem("cartDetails")) || [];
    if (old.find((d) => d._id == data._id)) {
      return;
    } else {
      const _new = [...old, data];
      setCartLength(_new.length);
      window.localStorage.setItem("cartDetails", JSON.stringify(_new));
      // console.log(_new)
    }
  };

  return (
    <>
      <Header cart={cartLength} />
      <CartContext.Provider value={{ addToCartHandler, setCartLength }}>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer />
      </CartContext.Provider>
    </>
  );
}
