import { useState, useEffect } from "react";
import DetailsProduct from "./DetailsProduct";
import axios from "axios";
import OrderItem from "./OrderedItem";
function DeleverProduct({ shopname }) {
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/getallorder").then((data) => {
      const allOrderedItem = data.data.data;
      const realOrderedItem = allOrderedItem.filter(
        (data) => data.delevered == false  
      );
      setOrderItem(realOrderedItem);
      // console.log(realOrderedItem)
    });
  }, []);
  return (
    <>
      <div className="w-11/12 h-screen pt-6">
        <div>
          <p className="text-2xl">Delever Product</p>
        </div>
        <div className="w-full bg-white rounded-xl mt-7 h-fit">
          <div className="grid grid-cols-6 mt-3 text-center">
            <p>Customer name</p>
            <p>Product name</p>
            <p>Quentity</p>
            <p>Total Price</p>
            <p>Order received at our warehouse</p>
            <p>Delever to customer</p>

            {/* data */}
            {orderItem.map((data) => (
              <OrderItem key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleverProduct;
