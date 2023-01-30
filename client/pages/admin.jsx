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
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import UpdateProfile from "../components/customer/right/UpdateProfile";
import AddCategory from "../components/admin/right/Products/Addcategory";

let uid;

function Admin() {
  const router = useRouter();
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [user, setUser] = useState(false);
  const [UserData, setUserData] = useState("");

  const handleState = (value) => {
    setCurrentComponent(value);
  };

  //   // getting user information by callind this function

  useEffect(() => {
    const UID = JSON.parse(localStorage.getItem("accesstoken")) || "";

    if (UID === "") {
      router.push("/login");
      return;
    } else {
      uid = UID;

      axios
        .post("http://127.0.0.1:5000/getuser", {
          uid: uid,
        })
        .then((u) => {
          if (u.data.message !== "admin") {
            router.push("/login");
            return;
          } else {
            const d = u.data.data[0];
            setUserData(d);
            setUser(true);
          }
        });
    }
  }, []);

  if (user === false) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-3xl">
        <Spinner color="purple" aria-label="Purple spinner example" size="xl" />
      </div>
    );
  }

  if (user === true) {
    return (
      <>
        <div className="flex bg-slate-400">
          <div className="w-1/4 overflow-y-auto h-fit">
            <Left
              handler={handleState}
              data={UserData.profilepic}
              username={UserData.username}
            />
          </div>
          <div className="flex justify-center w-3/4 overflow-y-auto bg-slate-200 rounded-tl-3xl rounded-bl-3xl">
            {currentComponent === "Dashboard" && <Dashboard value={UserData} />}
            {currentComponent === "Products" && (
              <Products value={UserData.productdeliverd} />
            )}
            {currentComponent === "AddProduct" && (
              <AddProduct UID={uid} value={UserData.shopname} />
            )}
            {currentComponent === "Addcategory" && (
              <AddCategory />
            )}
            {currentComponent === "DeleteMyProduct" && (
              <DeleteMyProduct value={UserData} />
            )}
            {currentComponent === "DeleteSellerProduct" && (
              <DeleteSellerProduct />
            )}
            {currentComponent === "DeleverProduct" && (
              <DeleverProduct shopname={UserData.shopname} />
            )}
            {currentComponent === "users" && <AllUsers />}
            {currentComponent === "sellers" && <AllSellers />}
            {currentComponent === "UpdateProfile" && (
              <UpdateProfile accesstoken={UserData.uid} />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Admin;
