import Image from "next/image";
import { useState } from "react";
import pr from "../../../../public/img/pr.png";
import EditSeller from "./EditSeller";
import axios from "axios";

function Users({ data }) {
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);

  const deleteUser = (e) => {
    e.preventDefault();
    // console.log(data.username)
    // console.log("e");
    axios
      .put("http://127.0.0.1:5000/deleteuser/seller", {
        username: data.username,
      })
      .then((m) => {
        if (m.data.message === "Seller account deleted successfully") {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      });
  };
  return (
    <>
      <Image src={pr} height={50} width={50} className="" />
      <p className="pt-3 ">{data.username}</p>
      <p className="pt-4  col-span-2">{data.email}</p>
      <p className="pt-3 ">{data.shopname}</p>
      <p className="pt-3 ">{data.products.length}</p>
      <p className="pt-3 ">{data.productdeliverd}</p>
      <p className="pt-3 ">{data.totalearning}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit === true ? <EditSeller setEdit={setEdit} /> : ""}
      <button onClick={deleteUser}>Delete</button>
      {success ? <p className="text-green-400 flex justify-center items-center">Delete successfully</p> : (<p></p>)}
    </>
  );
}

export default Users;
