import { Carousel, Button, Rating, Checkbox, Label } from "flowbite-react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../_app";
import { useRouter } from "next/router";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";

function product() {
  const { addToCartHandler } = useContext(CartContext);
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const ID = JSON.parse(window.localStorage.getItem("product_id"));
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allproducts = data.data.data;
      const item = allproducts.filter((data) => data._id === ID);
      const calRating =
        item[0].rating.reduce((acc, value) => acc + value, 0) /
        item[0].rating.length;
      const _rating = calRating.toFixed(1);
      setRating(_rating);
      setProduct(item[0]);
    });
  }, []);

  const handleRating = (e, value) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/products/rating", {
        id: id,
        rating: value,
        shopname: product.shopname,
      })
      .then((data) => {
        toast("Thanks for review", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      });
  };

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
        <div className="container flex w-full px-16 mt-20 gap-x-36">
          <div className="w-1/2">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src={product.images[0]}
                  alt={product.name}
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                />
                <img
                  src={product.images[2]}
                  alt={product.name}
                />
                <img
                  src={product.images[3]}
                  alt={product.name}
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
                  filled={rating == 2 || rating > 2 ? true : false}
                />
                <Rating.Star
                  filled={rating == 3 || rating > 3 ? true : false}
                />
                <Rating.Star
                  filled={rating == 4 || rating > 4 ? true : false}
                />
                <Rating.Star filled={rating == 5 ? true : false} />
              </Rating>
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {rating}
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
            <p>Rate this product</p>

            <div className="flex items-center gap-2 mb-4">
              <Button onClick={(e) => handleRating(e, 1)}>1 Star</Button>
              <Button onClick={(e) => handleRating(e, 2)}>2 Star</Button>
              <Button onClick={(e) => handleRating(e, 3)}>3 Star</Button>
              <Button onClick={(e) => handleRating(e, 4)}>4 Star</Button>
              <Button onClick={(e) => handleRating(e, 5)}>5 Star</Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default product;
