import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

function Dashboard({ value }) {
  let totalUser;
  let totalProducts;
  let totalearning;
  const [fatchingDataComplete, setFatchingDataComplete] = useState(false);

  const gettingAllData = () => {
    axios.get("http://127.0.0.1:5000/getuser/getalluser").then((data) => {
      // console.log(data.data)
      const customer = data.data.customer.length;
      const seller = data.data.seller.length;
      const admin = data.data.admin.length;
      totalUser = customer + seller + admin;
      // console.log(totalUser)

      if (document.getElementById("totaluser"))
        document.getElementById("totaluser").innerText = totalUser;
    });
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      totalProducts = data.data.data.length;
      if (document.getElementById("totalProducts"))
        document.getElementById("totalProducts").innerText = totalProducts;
    });

    axios.get("http://127.0.0.1:5000/products/getallorder").then((data) => {
      const allOrderedItem = data.data.data;
      const realOrderedItem = allOrderedItem.filter(
        (data) => data.delevered == true && data.shopname == "admin"
      );
      totalearning = realOrderedItem.reduce(
        (acc, currdentdata) => acc + currdentdata.price,
        0
      );
      // console.log(totalearning)
      if (document.getElementById("totalearning"))
        document.getElementById("totalearning").innerText = totalearning;
    });

    setFatchingDataComplete(true);
  };

  useEffect(() => {
    gettingAllData();
  }, []);

  if (fatchingDataComplete === false) {
    return (
      <>
        <div className="flex items-center justify-center w-full h-full text-3xl">
          <Spinner
            color="purple"
            aria-label="Purple spinner example"
            size="xl"
          />
        </div>
      </>
    );
  }

  if (fatchingDataComplete === true) {
    return (
      <>
        <div className="w-11/12 h-screen pt-6 ">
          <div>
            <p className="text-2xl">Overview</p>
          </div>
          <div className="grid grid-cols-4 gap-8 bg-white rounded-xl mt-9">
            <div className="text-center pt-7 pb-7">
              <p>Total Earning</p>
              <p id="totalearning">${totalearning}</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <p>Total Product</p>
              <p id="totalProducts">{totalProducts}</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <p>My Product</p>
              <p>{value.products.length}</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <p>Total user</p>
              <p id="totaluser">{totalUser}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
