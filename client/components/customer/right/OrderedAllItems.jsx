import { Table } from "flowbite-react";

function OrderedItems({ data }) {
  const {
    name,
    shopname,
    category,
    price,
    quentity,
    delevered,
    delevertoadmin,
  } = data;
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </Table.Cell>
        <Table.Cell>{shopname}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>{quentity}</Table.Cell>
        <Table.Cell>
          <p>{delevertoadmin === true ? "Received" : "On the way"}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{delevered === true ? "Delevered" : "On the way"}</p>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default OrderedItems;
