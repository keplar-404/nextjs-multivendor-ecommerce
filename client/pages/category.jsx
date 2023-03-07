import Left from "../components/category page/Left";
import Right from "../components/category page/Right";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./_app";

// Default value
let finalResult;
let getItemByCategory;

function category() {
  const { addToCartHandler } = useContext(CartContext);
  // setting default products
  const [products, setProducts] = useState(null);
  // setting default search result
  const [search, setSearch] = useState("");
  // setting default category result
  const [getCategory, setGetCategory] = useState("all");
  // setting default of ratings array
  const [selectedRatings, setSelectedRatings] = useState([]);
  // setting default sort filter
  const [_sort, setSort] = useState("");

  // getting all products from backend
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allproducts = data.data.data;
      setProducts(allproducts);
    });
  }, []);

  // getting item by search
  let itemGetBySearch;
  if (products !== null) {
    itemGetBySearch = products.filter((e) =>
      search === "" ? products : e.name.toLowerCase().includes(search)
    );
  } else {
    return;
  }

  // By calling this function will give you the final reasult based on your search, category, rating, price low to high or high to low filter
  const t = () => {
    if (selectedRatings.length) {
      const rafR = getItemByCategory.filter((p) =>
        selectedRatings.includes(
          Math.floor(
            p.rating.reduce((acc, value) => acc + value, 0) / p.rating.length
          )
        )
      );
      if (_sort == "lowtohigh") {
        const sortResult = rafR.sort((a, b) => a.price - b.price);
        // console.log(sortResult)
        finalResult = sortResult;
      } else if (_sort == "hightolow") {
        const sortResult = rafR.sort((a, b) => b.price - a.price);
        finalResult = sortResult;
      } else {
        finalResult = rafR;
      }
      // console.log(finalResult);
    } else {
      const rafR = getItemByCategory;
      if (_sort == "lowtohigh") {
        const sortResult = rafR.sort((a, b) => a.price - b.price);
        // console.log(sortResult)
        finalResult = sortResult;
      } else if (_sort == "hightolow") {
        const sortResult = rafR.sort((a, b) => b.price - a.price);
        finalResult = sortResult;
      } else {
        finalResult = rafR;
      }
      // console.log(finalResult);
    }
  };

  // getting item by category based on search
  if (getCategory === "all") {
    getItemByCategory = itemGetBySearch;
    t();
  } else {
    getItemByCategory = itemGetBySearch.filter(
      (e) => e.category === getCategory
    );
    t();
  }

  // rating handler
  let rating = [];
  const handleRating = (e) => {
    const ratingValue = Number(e.target.value);
    if (e.target.checked) {
      rating.push(ratingValue);
      setSelectedRatings(rating);
      t();
      // console.log(rating)
    } else {
      const newRatingArray = rating.filter((r) => r !== ratingValue);
      rating = newRatingArray;
      setSelectedRatings(rating);
      t();
      // console.log(rating)
    }
  };

  // sort handler
  const handleSort = (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      // sortValue.unshift(value)
      setSort(value);
      t();
    } else {
      value = "";
      setSort(value);
      t();
    }
  };
  // console.log(sort)

  return (
    <>
      <div className="container w-full h-full px-14 bg-slate-50">
        <div>
          <h1 className="text-2xl text-center pt-9">All Products</h1>
        </div>
        <div className="flex flex-row pt-12">
          <div className="w-1/5">
            {/* left all filter */}
            <Left
              getCategory={setGetCategory}
              setSearch={setSearch}
              handleRating={handleRating}
              handleSort={handleSort}
            />
          </div>
          <div className="w-4/5">
            <Right
              data={finalResult}
              itemsPerPage={8}
              addToCartHandler={addToCartHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
