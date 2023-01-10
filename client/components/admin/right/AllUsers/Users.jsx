import Image from "next/image";
import { useState } from "react";
import pr from "../../../../public/img/pr.png";
import EditUser from "./EditUser";

function Users() {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <Image src={pr} height={50} width={50} />
      <p className="pt-3">User name</p>
      <p className="pt-3">Email</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit === true ? <EditUser setEdit={setEdit}/> : ""}
    </>
  );
}

export default Users;
