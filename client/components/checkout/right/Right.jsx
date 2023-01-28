import { useState } from "react";
import Cartdelivery from "./Cartdelivery";
import Cashondelivery from "./Cashondelivery";

function Right() {
  const [payment, setPayment] = useState("cashondelivery");
  return (
    <>
      <div className="grid grid-cols-2 transition gap-x-8">
        <button
          className={
            payment == "cashondelivery"
              ? "bg-gradient-to-b from-slate-100 to-slate-200 mt-7 drop-shadow-md active:translate-y-1 transition-all active:duration-75 py-1 rounded-2xl"
              : " transition-all duration-700 drop-shadow mt-7 py-1 rounded-2xl bg-slate-100"
          }
          onClick={() => setPayment("cashondelivery")}
        >
          Cash on delivery
        </button>
        <button
          className={
            payment == "cart"
              ? "bg-gradient-to-b from-slate-100 to-slate-200 mt-7 drop-shadow-md active:translate-y-1 transition-all active:duration-75 py-1 rounded-2xl"
              : " transition-all duration-700 drop-shadow mt-7 py-1 rounded-2xl bg-slate-100"
          }
          onClick={() => setPayment("cart")}
        >
          Card payment
        </button>
      </div>
      <div className="">
        {payment === "cashondelivery" ? <Cashondelivery /> : <Cartdelivery />}
      </div>
    </>
  );
}

export default Right;
