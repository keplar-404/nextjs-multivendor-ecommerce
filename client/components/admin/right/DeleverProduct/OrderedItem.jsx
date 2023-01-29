import { useState } from "react";
import axios from "axios";

function OrderItem({ data }) {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const handleDelever = () => {
    axios
      .post("http://127.0.0.1:5000/products/delevertocustomer", {
        _id: data._id,
        uid: data.uid,
      })
      .then(() => {
        setState(true);
      });
  };

  const handleDelevertoWarehouse = () => {
    axios
      .post("http://127.0.0.1:5000/products/delevertoadmin", {
        _id: data._id,
        uid: data.uid,
      })
      .then(() => {
        setState2(true);
      });
  };
  // console.log(data)
  return (
    <>
      <p className="my-5">{data.nameofthecustomer}</p>
      <p className="my-5">{data.name}</p>
      <p className="my-5">{data.quentity}</p>
      <p className="my-5">${data.price}</p>
      {data.shopname == "admin" && data.delevertoadmin == false ? (
        <button
          className="w-40 my-5 rounded-lg cursor-pointer bg-slate-300 disabled:bg-green-400"
          disabled={state2}
          onClick={() => handleDelevertoWarehouse()}
        >
          Delever to warehouse
        </button>
      ) : (
        <p
          className={
            data.delevertoadmin === true ? "my-5 text-green-400" : "my-5"
          }
        >
          {data.delevertoadmin === true ? "Received" : "Not received"}
        </p>
      )}
      <button
        className="w-40 my-5 rounded-lg cursor-pointer bg-slate-300 disabled:bg-green-400"
        disabled={state}
        onClick={() => handleDelever()}
      >
        Delevet to customer
      </button>
    </>
  );
}

export default OrderItem;
