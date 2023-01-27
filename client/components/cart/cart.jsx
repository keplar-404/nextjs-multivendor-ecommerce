import { Table } from "flowbite-react";
import Options from "./Options";
import { useState } from "react";

function Cart({ data, deleteHandler, handleSubTotalPrice }) {
  const { images, name, category, stock, price, _id } = data;
  const [currentPrice, setCurrentPrice] = useState(price);

  let optinsNumber = [];
  for (let i = 1; i <= stock; i++) {
    optinsNumber.push(i);
  }
  let _currentPrice = price;
  const priceBasedOnQuentity = (value) => {
    // console.log(typeof(value));
    const QuentityStrtoNum = Number(value);
    _currentPrice = price * QuentityStrtoNum;
    // console.log(currentPrice);

    // updating finalCartDetails in local storage
    const finalCart = JSON.parse(
      window.localStorage.getItem("finalCartDetails")
    );
    const matchedItem = finalCart.filter((_data) => {
      if (_data._id == _id) {
        _data.stock = QuentityStrtoNum;
        _data.price = _currentPrice;
        return _data;
      }
    });
    const unMatchedItem = finalCart.filter((_data) => _data._id != _id) || [];

    const finalRes = [...matchedItem, ...unMatchedItem];
    window.localStorage.setItem("finalCartDetails", JSON.stringify(finalRes));

    setCurrentPrice(_currentPrice);
    handleSubTotalPrice(_id, _currentPrice);

    // console.log(filteredRes)
  };
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
              <select
                name="Quentity"
                className="h-10 text-center rounded-lg"
                onChange={(e) => {
                  priceBasedOnQuentity(e.target.value);
                }}
              >
                {optinsNumber.map((data) => (
                  <Options key={data} data={data} />
                ))}
              </select>
            )}
          </Table.Cell>
          <Table.Cell>${currentPrice}</Table.Cell>
          <Table.Cell>
            <button
              className="font-medium text-red-600 dark:text-blue-500"
              onClick={() => deleteHandler(data._id, currentPrice)}
            >
              Delete
            </button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
}

export default Cart;
