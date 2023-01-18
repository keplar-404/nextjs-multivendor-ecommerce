
import Sellers from "./Sellers";
import pr from "../../../../public/img/pr.png";
import { useState } from "react";
import Image from "next/image";

function AllUsers({ value }) {

  return (
    <>
      <div className="w-fit pt-6 h-screen">
        <div>
          <p className="text-2xl">All Sellers</p>
        </div>
        <div className="grid gap-y-3 grid-cols-11 bg-white rounded-xl mt-9 text-center ">
          <p></p>
          <p className="">Username</p>
          <p className=" col-span-2">Email</p>
          <p className="">Shopname</p>
          <p className="">Total products</p>
          <p className="">Products sold</p>
          <p className="">Total earning</p>
          <p className="col-span-2"></p>
          <p></p>
          {value.map((data)=> <Sellers data={data}/>)}
          
        </div>
      </div>
    </>
  );
}

export default AllUsers;
