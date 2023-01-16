import Image from "next/image";
import pr from "../../../public/img/pr.png";
import { useRef, useState } from "react";
import axios from "axios";

function DeleteProduct({ value }) {
  const name = useRef();
  const [product, setProduct] = useState(null);
  const [successfull, setsuccessfull] = useState(null);
  const [unsuccess, setUnsuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Name = name.current.value.toString();
    axios
      .post("http://127.0.0.1:5000/products/findsellerproduct", {
        name: Name,
        uid: value.uid,
      })
      .then((data) => {
        setProduct(data.data.data);
      });
    name.current.value = "";
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    const Name = name.current.value.toString();
    axios
      .put("http://127.0.0.1:5000/products/deletesellerproduct", {
        Name: Name,
        uid: value.uid,
      })
      .then((data) => {
        if (data.data.message === "Products not found") {
          setUnsuccess(true);
          setsuccessfull(false);
        }
      });
    if (data.data.message === "Product deleted successfully") {
      setsuccessfull(true);
      setUnsuccess(false);
    }
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
            className="rounded-lg border-gray-300 focus:ring-blue-500 w-64"
            ref={name}
            required
          />
          <button
            type="submit"
            className="mt-4 pt-2 pb-2 bg-green-200 rounded-lg w-64 disabled:cursor-wait"
          >
            check
          </button>
        </form>

        {product && (
          <div>
            <div className="grid grid-cols-5 gap-3 pt-36 pb-6">
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
              className="mt-4 pt-2 pb-2 bg-red-200 rounded-lg w-64"
              onClick={deleteProduct}
            >
              Delete
            </button>
          </div>
        )}
        {successfull ? <p>Product delete successfully</p> : ""}
        {unsuccess ? <p>Product not found</p> : ""}
      </div>
    </>
  );
}

export default DeleteProduct;
