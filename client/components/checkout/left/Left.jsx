import { Table } from "flowbite-react";
import Product from "./Product";
function Left({ data }) {
  if (data === "") {
    return (
      <>
        <div className="overflow-y-scroll">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Quentity</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
            </Table.Head>
          </Table>
          <p className="mt-6 text-center">There is no Product</p>
        </div>
      </>
    );
  }

  const totalPrice = data
    .reduce((acc, currentitem) => acc + currentitem.price, 0)
    .toString();
  return (
    <>
      <div className="overflow-y-scroll h-96">
        <Table>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Quentity</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((data) => (
              <Product key={data._id} data={data} />
            ))}
          </Table.Body>
        </Table>
      </div>
      <p className="text-lg font-bold">Total: {totalPrice}</p>
    </>
  );
}

export default Left;
