import Product from "./Product";

function Products() {
  return (
    <>
      <div className="w-11/12 pt-7 h-screen">
        <div>
          <p className="text-2xl">All products</p>
        </div>
        <div className="grid grid-cols-3 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p>255</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>products pending</p>
            <p>54546</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Products delevered</p>
            <p>25</p>
          </div>
        </div>
        <div className="rounded-xl mt-7 bg-white grid grid-cols-7 text-center pt-4 pb-4">
            <p></p>
            <p>Product</p>
            <p>Instock</p>
            <p>Sold</p>
            <p>Price</p>
            <p>Rating</p>
            <p>Order</p>
        <Product/>
        </div>
      </div>
    </>
  );
}

export default Products;