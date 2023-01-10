
import Sellers from "./Sellers";
import pr from "../../../../public/img/pr.png";
import { useState } from "react";

function AllUsers() {

  return (
    <>
      <div className="w-11/12 pt-6 h-screen">
        <div>
          <p className="text-2xl">All Sellers</p>
        </div>
        <div className="grid grid-cols-8 gap-8 bg-white rounded-xl mt-9">
          <Sellers/>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
