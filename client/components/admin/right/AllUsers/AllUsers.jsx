import Users from "./Users";
import pr from "../../../../public/img/pr.png";
import { useEffect, useState } from "react";
import axios from "axios";

function AllUsers({ value }) {
  const [allcustomer, setAllCustomer] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/getuser/getalluser").then((data) => {
      // console.log(data.data)
      const customer = data.data.customer;
      setAllCustomer(customer);
    });
  }, []);

  return (
    <>
      <div className="w-11/12 h-screen pt-6">
        <div>
          <p className="text-2xl">All Users</p>
        </div>
        <div className="grid grid-cols-6 gap-8 text-center bg-white rounded-xl mt-9">
          <p></p>
          <p>Username</p>
          <p>Email</p>
          <p>Delete user</p>
          <p>Edit User</p>
          <p></p>
          {allcustomer.map((data) => (
            <Users key={data._id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllUsers;
