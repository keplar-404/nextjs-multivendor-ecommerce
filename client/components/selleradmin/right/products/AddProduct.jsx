import { useRef, useState, useEffect } from "react";
import axios from "axios";
import CategoryOption from "./CategoryOption";
import { Triangle } from "react-loader-spinner";
import { Button } from "flowbite-react";

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
    let Name = name.current.value;
    
    let Description = description.current.value;
    let Price = price.current.value;
    let Stock = stock.current.value;
    let Category = category.current.value;
    let Img1 = img1.current.value;
    let Img2 = img2.current.value;
    let Img3 = img3.current.value;
    let Img4 = img4.current.value;
    let Img = [Img1, Img2, Img3, Img4];

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
          setUpdateSuccessfully(false);
        } else if (res.data.message === "Product update successfully") {
          setLoading(false);
          setUpdateSuccessfully(true);
          setSuccessfullCreate(false);
        }
      });
    // name.current.value = "";
    // description.current.value = "";
    // price.current.value = "";
    // stock.current.value = "";
    // category.current.value = "";
    // img1.current.value = "";
    // img2.current.value = "";
    // img3.current.value = "";
    // img4.current.value = "";
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
        <Button disabled={loading ? true : false} type="submit">
          Add or update Product
        </Button>
        <br />
        {successfullCreate === true ? (
          <p className="text-sm text-green-400 mb-2">
            Product added successfully refresh the page
          </p>
        ) : (
          ""
        )}
        {updateSuccessfully === true ? (
          <p className="text-sm text-green-400 mb-4">
            Product update successfully refresh the page
          </p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default AddProduct;
