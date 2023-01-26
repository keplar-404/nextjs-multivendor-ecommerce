import { Rating, TextInput } from "flowbite-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Options from "./CategoryOption";

function Left({ getCategory, setSearch, handleRating, handleSort }) {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/getcategory").then((data) => {
      const allCategory = data.data;
      setCategory(allCategory);
    });
  },[]);

  return (
    <>
      <form action="" className="flex flex-col gap-y-4">
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
        <div>
          <label htmlFor="category">Sort by :</label>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className="w-48 border-gray-300 rounded-md cursor-pointer drop-shadow-sm border-1 focus:ring-0"
            onChange={(e) => getCategory(e.target.value)}
          >
            <option value="all">All</option>
            {category
              ? category.map((data) => (
                  <Options key={data._id} data={data.name} />
                ))
              : ""}
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
        </div>
        <div className="">
          {/* Rating filter */}
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mt-1 rounded cursor-pointer focus:ring-0"
              value={5}
              onChange={(e) => handleRating(e)}
            />
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p>5.0</p>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mt-1 rounded cursor-pointer focus:ring-0"
              value={4}
              onChange={(e) => handleRating(e)}
            />
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
            <p>4.0</p>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mt-1 rounded cursor-pointer focus:ring-0"
              value={3}
              onChange={(e) => handleRating(e)}
            />
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
            </Rating>
            <p>3.0</p>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mt-1 rounded cursor-pointer focus:ring-0"
              value={2}
              onChange={(e) => handleRating(e)}
            />
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
            </Rating>
            <p>2.0</p>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mt-1 rounded cursor-pointer focus:ring-0"
              value={1}
              onChange={(e) => handleRating(e)}
            />
            <Rating>
              <Rating.Star />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
            </Rating>
            <p>1.0</p>
          </div>
        </div>
        {/* sort */}
        <div>
          <div>
            <p>Price</p>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                id="lowtohigh"
                className="mt-1 rounded cursor-pointer focus:ring-0"
                value={"lowtohigh"}
                onClick={(e)=> handleSort(e)}
              />
              <label htmlFor="lowtohigh">Low to high</label>
            </div>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                id="hightolow"
                className="mt-1 rounded cursor-pointer focus:ring-0"
                onClick={(e)=> handleSort(e)}
                value={"hightolow"}
              />
              <label htmlFor="lowtohigh">Hight to low</label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Left;
