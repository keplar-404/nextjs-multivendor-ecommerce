import Image from "next/image";
import { useState } from "react";
import pr from "../../../../public/img/pr.png";
import EditSeller from "./EditSeller";

function Users() {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <Image src={pr} height={50} width={50} />
      <p className="pt-3">User name</p>
      <p className="pt-3">Email</p>
      <p className="pt-3">Shop name</p>
      <p className="pt-3">Product in stock</p>
      <p className="pt-3">Product sold</p>
      <p className="pt-3">Total earning</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit === true ? <EditSeller setEdit={setEdit}/> : ""}
    </>
  );
}

export default Users;
