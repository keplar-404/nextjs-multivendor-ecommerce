import { useState } from "react";
import Dashboard from "../components/customer/Dashboard";
import Left from "../components/customer/Left";
import Order from "../components/customer/right/Order";
import UpdateProfile from "../components/customer/right/UpdateProfile";
function customer() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard")
  return (
    <>
      <div className="flex bg-slate-400">
        <div className="w-1/4 h-full">
          <Left setCurrentComponent={setCurrentComponent} />
        </div>
        <div className="flex justify-center w-3/4 bg-slate-200 rounded-tl-3xl rounded-bl-3xl">
          {currentComponent === "Dashboard" && <Dashboard />}
          {currentComponent === "Order" && <Order />}
          {currentComponent === "UpdateProfile" && <UpdateProfile />}
          {currentComponent === "Logout" && <Logout />}
        </div>
      </div>
    </>
  );
}

export default customer;
