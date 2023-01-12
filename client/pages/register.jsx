import { useState } from "react";
import Customer from "../components/register/Customer";
import Seller from "../components/register/Seller";

function Register() {
    const [form, setForm] = useState("Customer")
  return (
    <> 
      <div className="text-xl bg-slate-200 h-screen w-full flex flex-col justify-center items-center">
        <div>
          <p className="text-center">Register</p>
          <div className="grid grid-cols-2 gap-32 mt-6">
            <button className="" onClick={()=> setForm("Customer") }>Customer</button>
            <button onClick={()=> setForm("Seller") }>Seller</button>
          </div>
        </div>
        <div className="mt-4">
        { form === "Customer" ? <Customer/> : "" }
        { form === "Seller" ? <Seller/> : "" }
        </div>
      </div>
    </>
  );
}

export default Register;
