import Sellers from "./Sellers";
import pr from "../../../../public/img/pr.png";
import { useState, useEffect } from "react";
import axios from "axios";

function AllUsers() {
  const [AllSellers, setAllSellers] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/getuser/getalluser").then((data) => {
      const seller = data.data.seller;
      setAllSellers(seller);
    });
  }, []);
  return (
    <>
      <div className="w-full pt-6">
        <div>
          <p className="text-2xl">All Sellers</p>
        </div>
        <div className="grid w-full grid-cols-11 overflow-x-scroll text-xs text-center bg-white rounded-xl mt-9">
          <p></p>
          <p className="">Username</p>
          <p className="">Email</p>
          <p className="">Shopname</p>
          <p className="">Total products</p>
          <p className="">Products sold</p>
          <p className="">Total earning</p>
          <p className="">Seller id</p>
          <p>Edit</p>
          <p>Delete</p>
          <p></p>
          {AllSellers.map((data)=> <Sellers key={AllSellers._id} data={data}/>)}
        </div>
      </div>
    </>
  );
}

export default AllUsers;
