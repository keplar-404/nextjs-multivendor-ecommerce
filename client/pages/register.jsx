import { useState } from "react";
import Buyer from "../components/register/Buyer";
import Seller from "../components/register/Seller";

function Register() {
    const [form, setForm] = useState("Buyer")
  return (
    <>
      <div className="text-xl bg-slate-200 h-screen overflow-scroll flex flex-col justify-center items-center">
        <div>
          <p className="text-center">Register</p>
          <div className="grid grid-cols-2 gap-32 mt-6">
            <button className="" onClick={()=> setForm("Buyer") }>Buyer</button>
            <button onClick={()=> setForm("Seller") }>Seller</button>
          </div>
        </div>
        <div className="mt-4">
        { form === "Buyer" ? <Buyer/> : "" }
        { form === "Seller" ? <Seller/> : "" }
        </div>
      </div>
    </>
  );
}

export default Register;
