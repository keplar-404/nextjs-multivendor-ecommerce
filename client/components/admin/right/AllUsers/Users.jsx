import Image from "next/image";
import { useState } from "react";
import pr from "../../../../public/img/pr.png";
import axios from "axios";

// in the future i will add this update functionality
import EditUser from "./EditUser";

function Users({ data }) {
  const username = data.username;
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);
  // console.log(data);
  const deleteUser = (e) => {
    e.preventDefault();
    // console.log(data.username)
    // console.log("e");
    axios
      .put("http://127.0.0.1:5000/deleteuser/customer", {
        username: username,
      })
      .then((m) => {
        if (m.data.message === "Customer account deleted successfully") {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      });
  };
  return (
    <>
      <Image src={pr} height={50} width={50} alt={"dfsd"} />
      <p className="pt-3 overflow-x-scroll">{data.username}</p>
      <p className="pt-3 overflow-x-scroll">{data.email}</p>

      <button onClick={deleteUser}>Delete</button>

      {/* in the future i will add this update functionality */}
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit === true ? <EditUser setEdit={setEdit} /> : ""}
      {success ? (
        <p className="flex items-center justify-center text-green-400">
          Delete successfully
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default Users;
