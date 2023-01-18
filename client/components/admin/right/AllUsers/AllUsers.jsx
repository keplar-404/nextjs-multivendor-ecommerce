
import Users from "./Users";
import pr from "../../../../public/img/pr.png";
import { useState } from "react";

function AllUsers({ value }) {

  return (
    <>
      <div className="w-11/12 pt-6 h-screen">
        <div>
          <p className="text-2xl">All Users</p>
        </div>
        <div className="grid grid-cols-6 gap-8 bg-white rounded-xl mt-9">
          {value.map((data)=> <Users key={data._id} data={data}/>)}
          
        </div>
      </div>
    </>
  );
}

export default AllUsers;
