import AllProducts from "./AllProduct";
import { useState } from "react";
import ReactPaginate from "react-paginate";
function Right({ data, itemsPerPage, addToCartHandler }) {
  const items = data;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next ->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<- previous"
        renderOnZeroPageCount={null}
        activeLinkClassName="a"
        className="flex mb-10 text-lg gap-x-6 text-slate-500 "
      />
      <div className="grid grid-cols-4 gap-y-6">
        {currentItems.map((data) => (
          <AllProducts
            key={data._id}
            data={data}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
}

export default Right;
