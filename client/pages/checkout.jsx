import { useEffect, useState } from "react";
import Left from "../components/checkout/left/Left";
import Right from "../components/checkout/right/Right";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

function checkout() {
  const [items, setItems] = useState("");
  const router = useRouter();

  useEffect(() => {
    const allItems =
      JSON.parse(window.localStorage.getItem("realFinalAllCartDetails")) || "";
    if (allItems === "") {
      setItems("no")
      return;
    }
    setItems(allItems);
  }, []);

  if (items === "") {
    return (
      <>
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner
            color="purple"
            aria-label="Purple spinner example"
            size="xl"
          />
        </div>
      </>
    );
  } else if (items == "no") {
    return (
      <>
      <div className="flex items-center justify-center w-full text-xl mt-72">
      <p>You do not have any product in your cart</p>
      </div>
      </>
    )
  }

  return (
    <>
      <div className="container flex items-center justify-center w-full h-full mt-36 gap-x-14 px-14">
        <div className="w-1/2 h-96">
          <p className="text-lg font-bold text-center bold">Your item</p>
          <Left data={items} />
        </div>

        <div className="w-1/2 h-96">
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
