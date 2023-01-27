import { useEffect, useState } from "react";
import Left from "../components/checkout/left/Left";
import Right from "../components/checkout/right/Right";

function checkout() {
  const [items, setItems] = useState("");
  useEffect(() => {
    const allItems =
      JSON.parse(window.localStorage.getItem("realFinalAllCartDetails")) || "";
    setItems(allItems);
  }, []);
  return (
    <>
      <div className="container flex items-center justify-center w-full h-full mt-36 gap-x-14 px-14">
        <div className="w-1/2 ">
          <p className="text-lg font-bold text-center bold">Your item</p>
          <Left data={items} />
        </div>

        <div className="w-1/2 bg-blue-500 ">
          <p className="text-lg font-bold text-center">
            Select a payment method
          </p>
          <Right />
        </div>
      </div>
    </>
  );
}

export default checkout;
