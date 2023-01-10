function AddProduct() {
  return (
    <>
      <form className="flex flex-col gap-4 w-2/4 my-auto mt-4">
        <label htmlFor="productname">Product Name</label>
        <input
          type="text"
          id="productname"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          required
        />
        <label htmlFor="Description">Product Description</label>
        <input
          type="text"
          id="Description"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          required
        />
        
          <label htmlFor="Price" className="">
            Price
          </label>
          <input
            type="text"
            id="Price"
            className="rounded-lg border-gray-300 focus:ring-blue-500"
            required
          />
          <label htmlFor="Stock" className="">
            Stock
          </label>
          <input
            type="text"
            id="Stock"
            className="rounded-lg border-gray-300 focus:ring-blue-500"
            required
          />
       

        <select id="catagories" className="border-gray-300 rounded-lg">
          <option value="fasion">fasion</option>
          <option value="shoe">shoe</option>
          <option value="electric">electric</option>
          <option value="mobile">mobile</option>
        </select>

        <label htmlFor="imges">Product images</label>
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="image link one"
          required
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="image link two"
          required
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="image link three"
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="image link four"
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="image link five"
        />
        <button type="submit" className="mt-4 pt-2 pb-2 bg-green-200 rounded-lg w-64">Add product</button>
        <br />
      </form>
    </>
  );
}

export default AddProduct;
