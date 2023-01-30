import { Card, Rating } from "flowbite-react";
import Link from "next/link";

function AllProducts({ data, addToCartHandler }) {
  const { images, name, category, stock, price, rating, _id } = data;
  const calcRating = rating.reduce((acc, value)=> acc + value, 0) / data.rating.length
  const _rating = calcRating.toFixed(1)

  const setProductId = (e) => {
    e.preventDefault();
    window.localStorage.setItem("product_id", JSON.stringify(_id));
  };

  return (
    <>
      <div className="h-auto w-60">
        <Card
          imgAlt={name}
          imgSrc={images[0]}
        >
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div>
            <div className="mt-2.5 mb-5 flex items-center">
              <Rating>
                <Rating.Star />
                <Rating.Star
                  filled={_rating == 2 || _rating > 2 ? true : false}
                />
                <Rating.Star
                  filled={_rating == 3 || _rating > 3 ? true : false}
                />
                <Rating.Star
                  filled={_rating == 4 || _rating > 4 ? true : false}
                />
                <Rating.Star filled={_rating == 5 ? true : false} />
              </Rating>
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {_rating}
              </span>
            </div>
            <div className="mb-1">
              <span
                className="text-base font-bold text-gray-900 cursor-pointer dark:text-white"
                onClick={(e) => setProductId(e)}
              >
                <Link href="/product/[id]" as={`/product/${data._id}`}>
                  Details
                </Link>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              {stock == 0 ? (
                <p>Out of stock</p>
              ) : (
                <button
                  onClick={() => addToCartHandler(data)}
                  className="px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AllProducts;
