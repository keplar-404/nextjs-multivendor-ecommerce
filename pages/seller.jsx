import { useState } from "react";
import Left from "../components/selleradmin/left/Left";
import AddProduct from "../components/selleradmin/right/AddProduct";
import Dashboard from "../components/selleradmin/right/Dashboard";
import DeleteProduct from "../components/selleradmin/right/DeleteProduct";
import Products from "../components/selleradmin/right/products/AllProducts"

function SellerAdmin() {
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
          
        </div>
      </div>
    </>
  );
}

export default SellerAdmin;
