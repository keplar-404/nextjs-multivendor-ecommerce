import Left from "../components/category page/Left";
import Right from "../components/category page/Right";
import axios from "axios";
import { useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";

function category() {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [getCategory, setGetCategory] = useState("all");
  const [rating, setRating] = useState("");
  // console.log(typeof(search));
  // console.log(getCategory);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/allproducts").then((data) => {
      const allproducts = data.data.data;
      setProducts(allproducts);
    });
  }, []);
  // console.log(products);
  let itemGetBySearch;
  if (products !== null) {
    itemGetBySearch = products.filter((e) =>
      search === "" ? products : e.name.toLowerCase().includes(search)
    );
  } else {
    return;
  }
  // console.log(itemGetBySearch);
  let getItemByCategory;
  if (getCategory === "all") {
    getItemByCategory = itemGetBySearch;
  } else {
    getItemByCategory = itemGetBySearch.filter(
      (e) => e.category === getCategory
    );
  }
  // console.log(getItemByCategory)

  // console.log(rating)
  let _rating = [];
  const handleRatingFilter = (e) => {
    if (e.target.checked) {
      // console.log("checked")
      _rating.unshift(e.target.value);
      // console.log(_rating);
      // const filterItemByRating = _rating.map((e) => {
      //   if (
      //     e !==
      //     getItemByCategory.map((d) => {
      //       return d.rating.toString();
      //     })
      //   )
      //     return "";
      // });
      // console.log(filterItemByRating)
    }
    else if (!e.target.checked) {
      const filteredRatings = _rating.filter(
        (data) => data !== Number(e.target.value)
      );
      _rating = filteredRatings;
      // console.log(_rating)
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
            {/* search */}
            <div className="pb-5">
              <TextInput
                id="search"
                type="text"
                placeholder="search"
                className="w-48"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
            {/* left all filter */}
            <Left
              getCategory={setGetCategory}
              handleRatingFilter={handleRatingFilter}
            />
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
