import { Carousel, Button, Rating } from "flowbite-react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../_app";
import { useRouter } from "next/router";
import { Triangle } from "react-loader-spinner";

function product() {
  const { addToCartHandler } = useContext(CartContext);
  const [product, setProduct] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const ID = JSON.parse(window.localStorage.getItem("product_id"));
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allproducts = data.data.data;
      const item = allproducts.filter((data) => data._id === ID);
      setProduct(item[0]);
    });
  }, []);

  if (product == "") {
    return (
      <>
        <div className="flex items-center justify-center w-full mt-64">
          <Triangle
            height="200"
            width="200"
            color="black"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container flex w-full px-16 mt-36 gap-x-36">
          <div className="w-1/2">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-y-9">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="font-bold">Description:</p>
            <p>{product.description}</p>
            <p>Shopname: {product.shopname}</p>
            <div className="mt-2.5 mb-5 flex items-center">
              <Rating>
                <Rating.Star />
                <Rating.Star
                  filled={
                    product.rating == 2 || product.rating > 2 ? true : false
                  }
                />
                <Rating.Star
                  filled={
                    product.rating == 3 || product.rating > 3 ? true : false
                  }
                />
                <Rating.Star
                  filled={
                    product.rating == 4 || product.rating > 4 ? true : false
                  }
                />
                <Rating.Star filled={product.rating == 5 ? true : false} />
              </Rating>
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {product.rating}
              </span>
            </div>
            {product.stock == 0 ? (
              <p className="text-gray-400">Out of stock</p>
            ) : (
              <>
                <p className="font-bold">Stock: {product.stock}</p>
                <Button onClick={() => addToCartHandler(product)}>
                  Add to cart
                </Button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default product;
