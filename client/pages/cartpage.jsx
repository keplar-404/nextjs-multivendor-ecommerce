import Cart from "../components/cart/cart";
import { Button, Table } from "flowbite-react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./_app";

let random = 0;
let total = 0;
function cartPage() {
  const { setCartLength } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("cartDetails")) || "";
    window.localStorage.setItem("totalprice", JSON.stringify(total));
    setCartDetails(data);
  }, []);

  // this will work when the deleteHandler function will call
  useEffect(() => {
    const oldTotalPrice =
      JSON.parse(window.localStorage.getItem("totalprice")) || 0;
    // console.log(oldTotalPrice)
    if (document.getElementById("p")) {
      document.getElementById("p").innerHTML = oldTotalPrice;
    }
  }, [random]);

  // confirm order handler
  const confirmOrder = () => {
    // kalke korbo
  };

  if (cartDetails === null) {
    return (
      <>
        <div className="pt-12">
          <p className="pb-12 text-xl text-center">Cart details</p>
          <div className="container px-16 overflow-y-scroll h-96">
            <Table>
              <Table.Head className="text-center">
                <Table.HeadCell>Product Image</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Quentity</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
              </Table.Head>
            </Table>
            <p className="text-2xl text-center">Loading</p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button className="px-12">Confirm order</Button>
          </div>
        </div>
      </>
    );
  }

  //calculating total price
  total = cartDetails.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  let _CartDetails = cartDetails;

  // handle total price when product quentity if changed
  const handleSubTotalPrice = (id, price) => {
    const matchedItem = _CartDetails.filter((data) => data._id === id);
    const unMatchedItem = _CartDetails.filter((data) => data._id !== id) || [];
    const updateFilteredItem = [
      {
        _id: matchedItem[0]._id,
        images: matchedItem[0].images,
        price: price,
        category: matchedItem[0].category,
        description: matchedItem[0].description,
        name: matchedItem[0].name,
        rating: matchedItem[0].rating,
        shopname: matchedItem[0].shopname,
        sold: matchedItem[0].sold,
        stock: matchedItem[0].stock,
      },
    ];
    const newUpdatedAllItem = [...unMatchedItem, ...updateFilteredItem];
    _CartDetails = newUpdatedAllItem;

    const updatedPrice = _CartDetails.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    total = updatedPrice;
    document.getElementById("p").innerHTML = total;
    window.localStorage.setItem("totalprice", JSON.stringify(total));
  };

  // delete cart handler
  const deleteHandler = (id, currentPrice) => {
    const filteredData = cartDetails.filter((data) => data._id !== id);
    setCartDetails(filteredData);
    window.localStorage.setItem("cartDetails", JSON.stringify(filteredData));
    setCartLength(filteredData.length);

    const oldTotalPrice =
      JSON.parse(window.localStorage.getItem("totalprice")) || 0;
    if (oldTotalPrice == 0) return;
    const up = oldTotalPrice - currentPrice;
    window.localStorage.setItem("totalprice", JSON.stringify(up));

    random = Math.random();
  };
  return (
    <>
      <div className="pt-12">
        <p className="pb-12 text-xl text-center">Cart details</p>
        <div className="container px-16 overflow-y-scroll h-96">
          <Table>
            <Table.Head className="text-center">
              <Table.HeadCell>Product Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Quentity</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {cartDetails.map((data) => (
              <Cart
                key={data._id}
                data={data}
                deleteHandler={deleteHandler}
                handleSubTotalPrice={handleSubTotalPrice}
              />
            ))}
          </Table>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-y-3">
          <p className="text-xl">
            Total: $<span id="p">{total}</span>
          </p>
          <Button
            className="px-12"
            onClick={confirmOrder}
            disabled={cartDetails == "" ? true : false}
          >
            {cartDetails == "" ? (
              <p>You do not have any item to order</p>
            ) : (
              "Confirm order"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

export default cartPage;
