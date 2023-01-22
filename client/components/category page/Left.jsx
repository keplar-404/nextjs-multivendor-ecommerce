import { Dropdown, Rating } from "flowbite-react";

function Left() {
  return (
    <>
      <form action="" className="flex flex-col gap-y-4">
        <div>
          <label htmlFor="category">Sort by :</label>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className="w-48 border-gray-300 rounded-md drop-shadow-sm border-1 focus:outline-none focus:ring focus:ring-slate-50"
          >
            <option value="t-shirt">Category</option>
            <option value="t-shirt">All</option>
            <option value="t-shirt">All</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
        </div>
        <div className="flex gap-x-2">
          <input type="checkbox" name="" id="" />
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
          </Rating>
          <p>5.0</p>
        </div>
      </form>
    </>
  );
}

export default Left;
