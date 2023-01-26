import { Table } from "flowbite-react";
import Options from "./Options";

function Cart({ data }) {
  const { images, name, category, stock, price } = data;

    let optinsNumber = []
  for (let i = 1; i <= stock; i++) {
    optinsNumber.push(i)
  }


  return (
    <>
      <Table.Body className="text-center divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="flex items-center justify-center">
            images
          </Table.Cell>
          <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {name}
          </Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>
            {stock == 0 ? (
              <p>Out of stock</p>
            ) : (
              <select name="Quentity" className="h-10 text-center rounded-lg">
                {optinsNumber.map((data)=> <Options data={data}/>)}
              </select>
            )}
          </Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-red-600 hover:underline dark:text-blue-500"
            >
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
}

export default Cart;
