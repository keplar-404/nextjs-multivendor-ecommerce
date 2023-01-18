import Image from "next/image";
import { useState } from "react";
import pr from "../../../../public/img/pr.png";

// in the future i will add this update functionality
// import EditUser from "./EditUser";

function Users() {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <Image src={pr} height={50} width={50} />
      <p className="pt-3">User name</p>
      <p className="pt-3">Email</p>

      <button>Delete</button>

      {/* in the future i will add this update functionality */}
      {/* <button onClick={() => setEdit(true)}>Edit</button>
      {edit === true ? <EditUser setEdit={setEdit}/> : ""} */}
    </>
  );
}

export default Users;
