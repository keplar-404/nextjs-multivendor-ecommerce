import { useState } from "react";
import Cartdelivery from "./Cartdelivery";
import Cashondelivery from "./Cashondelivery";

function Right() {
    const [payment, setPayment] = useState('cashondelivery')
    return ( 
        <>
        <div className="flex items-center justify-center"> 
          <button onClick={()=>setPayment("cashondelivery")}>Cash on delivery</button>
          <button onClick={()=>setPayment("cart")}>Card payment</button>
        </div>
          <div>
          {payment === "cashondelivery" ? <Cashondelivery/> : <Cartdelivery/> }            
          </div>
        </>
     );
}

export default Right;