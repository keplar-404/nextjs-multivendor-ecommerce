import Left from "../components/category page/Left";
import Right from "../components/category page/Right";
import axios from "axios";
import { useEffect, useState } from "react";

// Default value
let finalResult;
let getItemByCategory;

function category() {
  // setting default products
  const [products, setProducts] = useState(null);
  // setting default search result
  const [search, setSearch] = useState("");
  // setting default category result
  const [getCategory, setGetCategory] = useState("all");
// setting default of ratings array
  const [selectedRatings, setSelectedRatings] = useState([]);

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

  // By calling this function will give you the final reasult based on your search, category, and rating array filter
  const t = () => {
    if (selectedRatings.length) {
      finalResult = getItemByCategory.filter((p) =>
        selectedRatings.includes(Math.floor(p.rating))
      );
      // console.log(finalResult);
    } else {
      finalResult = getItemByCategory;
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
  
  let rating = [];
  const handleRating = (e) => {
    const ratingValue =Number(e.target.value);
    if (e.target.checked) {
      rating.push(ratingValue)
      setSelectedRatings(rating);
      t()
      // console.log(rating)
    } else {
    const newRatingArray =  rating.filter((r) => r !== ratingValue)
    rating = newRatingArray
      setSelectedRatings(rating);
      t()
      // console.log(rating)
    }
  };

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
            />
          </div>
          <div className="w-4/5">
            <Right data={finalResult} />
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
