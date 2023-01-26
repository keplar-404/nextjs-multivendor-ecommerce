import { Card, Rating } from "flowbite-react";

function AllProducts({ data, addToCartHandler }) {
  const { images, name, category, stock, price } = data;

  return (
    <>
      <div className="h-auto w-60">
        <Card
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="mt-2.5 mb-5 flex items-center">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${data.price}
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
        </Card>
      </div>
    </>
  );
}

export default AllProducts;
