import { Table } from "flowbite-react";
import OrderedItems from "./OrderedAllItems";

function Order({ data }) {
 const { order } =data
  return (
    <>
      <div className="w-full mt-11">
        <Table className="text-center">
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Shop name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quentity</Table.HeadCell>
            <Table.HeadCell>
              <span className="">Order recive from seller</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="">Delevered</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {order.map((data)=> <OrderedItems key={data._id} data={data} /> )}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Order;
