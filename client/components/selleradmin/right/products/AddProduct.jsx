import { useRef, useState, useEffect } from "react";
import axios from "axios";
import CategoryOption from "./CategoryOption";
import { Triangle } from "react-loader-spinner";

function AddProduct({ value, UID }) {
  const [ctg, setCtg] = useState([]);
  const [successfullCreate, setSuccessfullCreate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateSuccessfully, setUpdateSuccessfully] = useState(false);

  // getting the all category
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/products/getcategory").then((data) => {
      const _data = data.data;
      setCtg(_data);
    });
  }, []);

  // using useRef hook to get value from form
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const stock = useRef();
  const category = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // getting value from form
    const Name = name.current.value;
    const Description = description.current.value;
    const Price = price.current.value;
    const Stock = stock.current.value;
    const Category = category.current.value;
    const Img1 = img1.current.value;
    const Img2 = img2.current.value;
    const Img3 = img3.current.value;
    const Img4 = img4.current.value;
    const Img = [Img1, Img2, Img3, Img4];

    // seller shop name
    const shopname = value;

    // createing product
    setLoading(true);
    axios
      .post("http://127.0.0.1:5000/products/addproduct", {
        name: Name,
        description: Description,
        images: Img,
        price: Price,
        stock: Stock,
        category: Category,
        shopname: shopname,
        uid: UID,
      })
      .then((res) => {
        if (res.data.message === "Product created successfully") {
          setLoading(false);
          setSuccessfullCreate(true);
          setUpdateSuccessfully(false)
        } else if (res.data.message === "Product update successfully") {
          setLoading(false);
          setUpdateSuccessfully(true);
          setSuccessfullCreate(false)
        } 
      });
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 w-2/4 my-auto mt-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="productname">Product Name</label>
        <input
          type="text"
          id="productname"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={name}
          required
        />
        <label htmlFor="description">Product description</label>
        <input
          type="text"
          id="description"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={description}
          required
        />

        <label htmlFor="Price" className="">
          Price
        </label>
        <input
          type="text"
          id="Price"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={price}
          required
        />
        <label htmlFor="Stock" className="">
          Stock
        </label>
        <input
          type="text"
          id="Stock"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={stock}
          required
        />

        <select
          id="catagories"
          className="border-gray-300 rounded-lg"
          ref={category}
        >
          {ctg !== []
            ? ctg.map((data) => (
                <CategoryOption key={data.name} data={data.name} />
              ))
            : ""}
        </select>

        <label htmlFor="imges">Product images</label>
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={img1}
          placeholder="image link one"
          required
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={img2}
          placeholder="image link two"
          required
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={img3}
          placeholder="image link three"
        />
        <input
          type="text"
          id="imges"
          className="rounded-lg border-gray-300 focus:ring-blue-500"
          ref={img4}
          placeholder="image link four"
        />
        <button
          type="submit"
          className="mt-4 pt-2 pb-2 bg-green-200 rounded-lg w-64"
        >
          {loading === true ? (
            <Triangle
              height="21"
              width="21"
              color="white"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <p>Add or update Product</p>
          )}
        </button>
        <br />
        {successfullCreate === true ? (
          <p className="text-sm text-green-400 mb-2">
            Product added successfully
          </p>
        ) : (
          ""
        )}
        {updateSuccessfully === true ? (
          <p className="text-sm text-green-400 mb-4">
            Product update successfully
          </p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default AddProduct;
