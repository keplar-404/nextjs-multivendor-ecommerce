import { Table } from "flowbite-react";

function Product({ data }) {
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {data.name}
        </Table.Cell>
        <Table.Cell>{data.stock}</Table.Cell>
        <Table.Cell>${data.price}</Table.Cell>
      </Table.Row>
    </>
  );
}

export default Product;
