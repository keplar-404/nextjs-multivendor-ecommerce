import Product from "./Product";

function Products({ value, value2 }) {
  const totalProducts = value.length;
  return (
    <>
      <div className="w-11/12 pt-7 h-fit">
        <div>
          <p className="text-2xl">All products</p>
        </div>
        <div className="grid grid-cols-2 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p>{totalProducts}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Products delevered</p>
            <p>{value2}</p>
          </div>
        </div>
        <div className="rounded-xl mt-7 bg-white grid grid-cols-6 text-center pt-4 pb-4 ">
          <p></p>
          <p>Product</p>
          <p>Instock</p>
          <p>Sold</p>
          <p>Price</p>
          <p>Rating</p>
          {value.map((data)=> <Product key={data._id} data={data} /> )}
          
        </div>
      </div>
    </>
  );
}

export default Products;
