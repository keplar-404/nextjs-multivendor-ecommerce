import Image from "next/image";
import pr from "../../../../public/img/pr.png";
import { useRef, useState } from "react";
import axios from "axios";

function DeleteMyProduct({ value }) {
  const name = useRef();
  const [product, setProduct] = useState(null);
  const [successfull, setsuccessfull] = useState(null);
  const [unsuccess, setUnsuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Name = name.current.value.toString();
    // console.log(value)
    axios
      .post("http://127.0.0.1:5000/products/findadminproduct", {
        name: Name,
        uid: value.uid,
      })
      .then((data) => {
        console.log(data.message)
        if(data.data.message === "Product not found"){
          setUnsuccess(true)
          setsuccessfull(false)
          return
        }
        setProduct(data.data.data);
        setUnsuccess(false)
      });
    };
    
    const deleteProduct = (e) => {
    e.preventDefault();
    const Name = name.current.value.toString();
    axios
    .put("http://127.0.0.1:5000/products/deleteproduct", {
        uid: value.uid,
        Name: Name,
        shopname: "admin"
      })
      .then((data) => {
        // console.log(data.data)
        setsuccessfull(true)
        name.current.value = "";
      });
    };
  return (
    <>
      <div className="h-fill">
        <form
          className="flex flex-col gap-4 my-auto mt-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            id="productname"
            className="w-64 border-gray-300 rounded-lg focus:ring-blue-500"
            ref={name}
            required
          />
          <button
            type="submit"
            className="w-64 pt-2 pb-2 mt-4 bg-green-200 rounded-lg disabled:cursor-wait"
          >
            check
          </button>
        </form>

        {product && (
          <div>
            <div className="grid grid-cols-5 gap-3 pb-6 pt-36">
              <Image src={pr} width={50} height={50} />
              <Image src={pr} width={50} height={50} />
              <Image src={pr} width={50} height={50} />
              <Image src={pr} width={50} height={50} />
              <Image src={pr} width={50} height={50} />
            </div>
            <p>Product name : {product.name}</p>
            <p>Price : {product.price}</p>
            <p>Rating : {product.rating}</p>
            <p>Stock : {product.stock}</p>
            <p>Category : {product.category}</p>
            <button
              className="w-64 pt-2 pb-2 mt-4 bg-red-200 rounded-lg"
              onClick={deleteProduct}
            >
              Delete
            </button>
          </div>
        )}
        {successfull ? <p className="my-4 text-xl text-center text-red-600">Product delete successfully</p> : ""}
        {unsuccess ? <p className="text-xl text-center text-red-600">Product not found</p> : ""}
      </div>
    </>
  );
}

export default DeleteMyProduct;
