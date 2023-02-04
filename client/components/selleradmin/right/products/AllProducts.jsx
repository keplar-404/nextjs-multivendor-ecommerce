import Product from "./Product";
import { useEffect, useState } from "react";
import axios, { all } from "axios";

function Products(props) {
  // console.log(props.value)
  const { products, shopname } = props.value
  const totalProduct = products.length
  const [allProducts , setAllProducts] = useState([])
  const [pending, setPending] = useState([])
  const [delver, setDelever] = useState([])

useEffect(()=> {
  axios.get('http://127.0.0.1:5000/products/allproducts').then((data)=> {
    const _allProducts = data.data.data
    const findingSellerProduct = _allProducts.filter((data)=> data.shopname == shopname)
    setAllProducts(findingSellerProduct)
  })
  axios.get('http://127.0.0.1:5000/products/getallorder').then((data)=> {
    const allOrder = data.data.data
    const findPendingOrder  = allOrder.filter((data)=> data.shopname == shopname && data.delevered == false)
    const findDeleverOrder = allOrder.filter((data)=> data.shopname == shopname && data.delevered == true)
    setPending(findPendingOrder.length)
    setDelever(findDeleverOrder.length)
  })
},[])

  return (
    <>
      <div className="w-11/12 pt-7 h-fit">
        <div>
          <p className="text-2xl">All products</p>
        </div>
        <div className="grid grid-cols-3 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p>{totalProduct}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>products pending</p>
            <p>{pending}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Products delevered</p>
            <p>{delver}</p>
          </div>
        </div>
        <div className="grid grid-cols-6 pt-4 pb-4 text-center bg-white rounded-xl mt-7">
            <p></p>
            <p>Name</p>
            <p>Instock</p>
            <p>Sold</p>
            <p>Price</p>
            <p>Rating</p>
            {allProducts.map((currendata)=>  <Product key={currendata._id} value={currendata} />)}
        </div>
      </div>
    </>
  );
}

export default Products;
