import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/header/Header";
import { useState, createContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const CartContext = createContext();
export const _Login = createContext();

export default function App({ Component, pageProps }) {
  const [logedin, setLogedin] = useState(false);
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
      <NextNProgress />
      <Header cart={cartLength} logedin={logedin} />
      <CartContext.Provider value={{ addToCartHandler, setCartLength }}>
        <_Login.Provider value={{ setLogedin }}>
          <Component {...pageProps} />
        </_Login.Provider>
        <ToastContainer />
      </CartContext.Provider>
    </>
  );
}
