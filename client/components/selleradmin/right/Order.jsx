import { useState, useEffect } from "react";
import axios from "axios";
import OrderItem from "./AllorderItem";
function Order({ shopname }) {
  const [orderItem, setOrderItem] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/getallorder").then((data) => {
      const allOrderedItem = data.data.data
      const realOrderedItem = allOrderedItem.filter((data)=> data.shopname == shopname && data.delevertoadmin == false )
      setOrderItem(realOrderedItem)
      // console.log(realOrderedItem)
      
    });
  }, []);
  return (
    <>
      <div className="w-11/12 bg-white rounded-xl mt-7 h-fit">
        <div className="grid grid-cols-5 mt-3 text-center">
          <p>Customer name</p>
          <p>Product name</p>
          <p>Quentity</p>
          <p>Total Price</p>
          <p></p>

          {/* data */}
          {orderItem.map((data)=> <OrderItem key={data._id} data={data}/>)}
        </div>
      </div>
    </>
  );
}
export default Order;
