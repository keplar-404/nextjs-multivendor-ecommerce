import { useState, useEffect } from "react";
import Left from "../components/selleradmin/left/Left";
import AddOrUpdateProduct from "../components/selleradmin/right/products/AddProduct";
import Dashboard from "../components/selleradmin/right/Dashboard";
import DeleteProduct from "../components/selleradmin/right/DeleteProduct";
import Products from "../components/selleradmin/right/products/AllProducts";
import axios from "axios";

function SellerAdmin() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [user, setUser] = useState(null);
  const [_uid, set_Uid] = useState(null);

  const getUser = (uid) => {
    const UID = uid.replace(/"/g, "");
    set_Uid(UID);
    axios
      .post("http://127.0.0.1:5000/getuser", {
        uid: UID,
      })
      .then((u) => {
        setUser(u.data[0]);
        // console.log(user.shopname);
      });
  };
  useEffect(() => {
    try {
      const UID = localStorage.getItem("accesstoken");
      // console.log(UID);
      getUser(UID);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const handleState = (value) => {
    setCurrentComponent(value);
  };

  if (user === null) {
    return <p>Loading</p>;
  } else if (user) {
    return (
      <>
        <div className=" bg-slate-400 flex">
          <div className="w-1/4 h-full">
            <Left handler={handleState} />
          </div>
          <div className="bg-slate-200 w-3/4 rounded-tl-3xl rounded-bl-3xl flex justify-center">
            {currentComponent === "Dashboard" && <Dashboard value={user} />}
            {currentComponent === "Products" && <Products value={user} />}
            {currentComponent === "AddProduct" && (
              <AddOrUpdateProduct value={user.shopname} UID={_uid===null?"":_uid} />
            )}
            {currentComponent === "DeleteProduct" && <DeleteProduct />}
          </div>
        </div>
      </>
    );
  }
}

export default SellerAdmin;
