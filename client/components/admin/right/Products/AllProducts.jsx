import Product from "./Product";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";


let totalProducts;
function Products({ value }) {
const [allproducts, setAllProducts] = useState([])
 
useEffect (()=> {
  axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
    setAllProducts(data.data.data)
    totalProducts = data.data.data.length;
    if (document.getElementById("totalProducts"))
      document.getElementById("totalProducts").innerText = totalProducts;
  });
},[])
  return (
    <>
      <div className="w-11/12 pt-7 h-fit">
        <div>
          <p className="text-2xl">All products</p>
        </div>
        <div className="grid grid-cols-2 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p id="totalProducts">{totalProducts}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Products delevered</p>
            <p>{value}</p>
          </div>
        </div>
        <div className="grid grid-cols-8 pt-4 pb-4 text-center bg-white rounded-xl mt-7 ">
          <p></p>
          <p>Product</p>
          <p>Instock</p>
          <p>Sold</p>
          <p>Price</p>
          <p>category</p>
          <p>Rating</p>
          <p>Shopname</p>
          {allproducts.map((data)=> <Product key={data._id} data={data} /> )}        
        </div>
      </div>

    </>
  );
}

export default Products;
