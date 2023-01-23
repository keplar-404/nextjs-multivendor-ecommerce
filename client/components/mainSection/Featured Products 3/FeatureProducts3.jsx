import Products from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

function FeatureProducts() {
  const [topProduct, setTopProduct] = useState(null);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allProducts = data.data.data;
      const AllProduct = allProducts.map((data) => {
        if (data.rating >= 4) return data;
      });
      const filteredProduct = AllProduct.filter((data) => {
        if (data !== undefined) return data;
      });
      const fouritem = filteredProduct.slice(0, 5);
      //   console.log(filteredProduct);
      setTopProduct(fouritem);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-28">
        <h1 className="text-2xl">Top rated Products</h1>
        <p className="mt-5">New collection</p>
      </div>
      <div className="grid grid-cols-5 px-12 mt-6 gap-7 gap-y-8">
        {topProduct === null
          ? ""
          : topProduct.map((data) => <Products key={data._id} data={data} />)}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link href={"/category"}>
          <Button className="px-12">Show all</Button>
        </Link>
      </div>
    </>
  );
}
export default FeatureProducts;
