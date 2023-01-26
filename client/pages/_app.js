import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/header/Header";
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const old = JSON.parse(window.localStorage.getItem("cartDetails")) || [];
    setCart(old.length);
  }, []);

  const addToCartHandler = (data) => {
    const old = JSON.parse(window.localStorage.getItem("cartDetails")) || [];
    if (old.find((d) => d._id == data._id)) {
      return;
    } else {
      const _new = [...old, data];
      setCart(_new.length);
      window.localStorage.setItem("cartDetails", JSON.stringify(_new));
      // console.log(_new)
    }
  };

  return (
    <>
      <Header cart={cart} />
      <CartContext.Provider value={{ addToCartHandler }}>
        <NextNProgress />
        <Component {...pageProps} />
      </CartContext.Provider>
    </>
  );
}
