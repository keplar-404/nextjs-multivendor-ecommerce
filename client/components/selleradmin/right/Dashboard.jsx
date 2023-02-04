import { useEffect } from "react";
import axios from "axios";

let totalearning;
function Dashboard(props) {
  // console.log(props.value)
  const { shopname, products, productpending } = props.value;
  const totalProduct = products.length;
  // console.log(shopname)
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/getallorder").then((data) => {
      const allOrderedItem = data.data.data;
      const realOrderedItem = allOrderedItem.filter(
        (data) => data.delevered == true && data.shopname == shopname
      );
      totalearning = realOrderedItem.reduce(
        (acc, currdentdata) => acc + currdentdata.price,
        0
      );
      // console.log(totalearning)
      if (document.getElementById("totalearning"))
        document.getElementById("totalearning").innerText = `$${totalearning}`;
    });
  }, []);

  return (
    <>
      <div className="w-11/12 h-screen pt-6">
        <div>
          <p className="text-2xl">Overview</p>
        </div>
        <div className="grid grid-cols-2 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Earning</p>
            <p id="totalearning">${totalearning}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p>{totalProduct}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
