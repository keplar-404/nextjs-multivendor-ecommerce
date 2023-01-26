import Cart from "../components/cart/cart";
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
function cartPage() {
  const [cartDetails, setCartDetails] = useState(null);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("cartDetails")) || [];
    setCartDetails(data);
  }, []);

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
  } else {
    // console.log(cartDetails)
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
                <Cart key={data._id} data={data} />
              ))}
            </Table>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button className="px-12">Confirm order</Button>
          </div>
        </div>
      </>
    );
  }
}

export default cartPage;
