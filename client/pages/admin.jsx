import { useState } from "react";
import Left from "../components/admin/left/Left";
import AddProduct from "../components/admin/right/AddProduct";
import Dashboard from "../components/admin/right/Dashboard";
import DeleteProduct from "../components/admin/right/DeleteProduct";
import DeleverProduct from "../components/admin/right/DeleverProduct/DeleverProduct";
import Products from "../components/admin/right/products/AllProducts"
import AllSellers from "../components/admin/right/AllSellers/AllSellers";
import AllUsers from "../components/admin/right/AllUsers/AllUsers";

function Admin() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const handleState = (value) => {
   setCurrentComponent(value)
  }
  return (
    <>
      <div className=" bg-slate-400 flex">
        <div className="w-1/4 h-full">
          <Left handler={handleState} />
        </div>
        <div className="bg-slate-200 w-3/4 rounded-tl-3xl rounded-bl-3xl h-fit flex justify-center">
          {currentComponent === "Dashboard" && <Dashboard />}
          {currentComponent === "Products" && <Products />}
          {currentComponent === "AddProduct" && <AddProduct />}
          {currentComponent === "DeleteProduct" && <DeleteProduct />}
          {currentComponent === "DeleverProduct" && <DeleverProduct />}
          {currentComponent === "users" && <AllUsers />}
          {currentComponent === "sellers" && <AllSellers />}
          
        </div>
      </div>
    </>
  );
}

export default Admin;
