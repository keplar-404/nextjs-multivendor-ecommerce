import Product from "./Product";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";


let totalProducts;
function Products({ value }) {
const [allproducts, setAllProducts] = useState([])
const [deleverdOrder, setDeleveredOrder] = useState(0)
 
useEffect (()=> {
  axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
    setAllProducts(data.data.data)
    totalProducts = data.data.data.length;
    if (document.getElementById("totalProducts"))
      document.getElementById("totalProducts").innerText = totalProducts;
  });
  axios.get('http://127.0.0.1:5000/products/getallorder').then((data)=> {
    const _data = data.data.data
    const orderDelever = _data.filter((data)=> data.delevered == true)
    const quentity = orderDelever.reduce((acc, val)=> acc + val.quentity, 0)
    // console.log(quentity)
    setDeleveredOrder(quentity)
  })
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
            <p>{deleverdOrder}</p>
          </div>
        </div>
        <div className="grid grid-cols-7 pt-4 pb-4 text-center bg-white rounded-xl mt-7 ">
          <p></p>
          <p>Product</p>
          <p>Instock</p>
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
