import Left from "../components/category page/Left";
import Right from "../components/category page/Right";
import axios from "axios";
import { useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";

function category() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allproducts = data.data.data;
      setProducts(allproducts);
    });
  }, []);
  console.log(products);
  return (
    <>
      <div className="container w-full h-full px-14 bg-slate-50">
        <div>
          <h1 className="text-2xl text-center pt-9">All Products</h1>
        </div>
        <div className="flex flex-row pt-12">
          <div className="w-1/5">
            {/* search */}
            <div className="pb-5">
              <TextInput id="search" type="text" placeholder="search" className="w-48" />
            </div>
            {/* left all filter */}
            <Left />
          </div>
          <div className="w-4/5">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
