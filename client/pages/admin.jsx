import { useState, useEffect } from "react";
import Left from "../components/admin/left/Left";
import AddProduct from "../components/admin/right/Products/AddProduct";
import Dashboard from "../components/admin/right/Dashboard";
import DeleteMyProduct from "../components/admin/right/Products/DeleteMyProduct";
import DeleteSellerProduct from "../components/admin/right/Products/DeleteSellerProduct";
import DeleverProduct from "../components/admin/right/DeleverProduct/DeleverProduct";
import Products from "../components/admin/right/products/AllProducts";
import AllSellers from "../components/admin/right/AllSellers/AllSellers";
import AllUsers from "../components/admin/right/AllUsers/AllUsers";
import axios from "axios";

function Admin() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [user, setUser] = useState(null);
  const [_uid, set_Uid] = useState(null);
  const [allUser, setAllUser] = useState(null);
  const [AllProducts, setAllProducts] = useState(null)

  const handleState = (value) => {
    setCurrentComponent(value);
  };

  // getting user information by callind this function
  const getUser = (uid) => {
    const UID = uid.replace(/"/g, "");
    set_Uid(UID);
    axios
      .post("http://127.0.0.1:5000/getuser", {
        uid: UID,
      })
      .then((u) => {
        // console.log(u.data[0])
        setUser(u.data[0]);
      });
    axios.get("http://127.0.0.1:5000/getuser/getalluser").then((u) => {
     setAllUser(u.data)
    });
    axios.get("http://127.0.0.1:5000/products/allproducts").then((u)=>{
      setAllProducts(u.data.data)
      // console.log(u.data.data)
    })
  };

  // getting uid accesstoken for the local storage
  useEffect(() => {
    try {
      const UID = localStorage.getItem("accesstoken");
      // console.log(UID);
      getUser(UID);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  if (user === null) {
    return (
      <p className="flex justify-center items-center h-screen w-screen text-3xl">
        Loading
      </p>
    );
  } else if (user) {
    return (
      <>
        <div className=" bg-slate-400 flex">
          <div className="w-1/4 h-fit overflow-y-auto">
            <Left handler={handleState} />
          </div>
          <div className="bg-slate-200 w-3/4 rounded-tl-3xl rounded-bl-3xl flex justify-center overflow-y-auto">
            {currentComponent === "Dashboard" && <Dashboard value={user} value2={allUser} value3={AllProducts} />}
            {currentComponent === "Products" && <Products value={AllProducts} value2={user.productdeliverd} />}
            {currentComponent === "AddProduct" && <AddProduct UID={_uid} value={user.shopname} />}
            {currentComponent === "DeleteMyProduct" && <DeleteMyProduct value={user} />}
            {currentComponent === "DeleteSellerProduct" && <DeleteSellerProduct />}
            {currentComponent === "DeleverProduct" && <DeleverProduct />}
            {currentComponent === "users" && <AllUsers value={allUser.customer} />}
            {currentComponent === "sellers" && <AllSellers value={allUser.seller} />}
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
