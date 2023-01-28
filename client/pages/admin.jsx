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

let uid;
// let userData;
let allUserData;
let allProductData;

function Admin() {
  const router = useRouter();
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [user, setUser] = useState(false);
  const [UserData, setUserData] = useState ("")
  const [auid, setUid] = useState("");
  const [allUser, setAllUser] = useState("");
  const [AllProducts, setAllProducts] = useState("");

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
            const d = u.data.data[0]
            // userData = u.data.data[0];
            setUserData(d)
            // console.log(userData);
            // axios.get("http://127.0.0.1:5000/getuser/getalluser").then((u) => {
            //   allUserData = u.data;
            //   // console.log(allUserData)

            //   axios
            //     .get("http://127.0.0.1:5000/products/allproducts")
            //     .then((u) => {
            //       allProductData = u.data.data;
            //       // console.log(allProductData)
                  setUser(true);
            //     });
            // });
          }
        });
    }
  }, []);

  //   const getUser = (uid) => {
  //     let _user;
  //     const UID = uid.replace(/"/g, "");
  //     // console.log("t")
  //     axios
  //     .post("http://127.0.0.1:5000/getuser", {
  //       uid: UID,
  //     })
  //     .then((u) => {
  //       // console.log(u.data.message)
  //       if (u.data.message !== "admin") {
  //           router.push("/login");
  //           return;
  //         }
  //         // console.log(u.data.data[0])
  //         _user = u.data.data[0]
  //         // console.log(_user)
  //         // axios.get("http://127.0.0.1:5000/getuser/getalluser").then((u) => {
  //         //     setAllUser(u.data);
  //         //     // console.log(allUser)
  //         //   });

  //         //   axios.get("http://127.0.0.1:5000/products/allproducts").then((u) => {
  //         //       setAllProducts(u.data.data);
  //         //     });
  //             setUser(_user);
  //             console.log(user)
  //       });
  //       // setUid(UID);
  //       // console.log(auid)
  //     };

  //     // getting uid accesstoken for the local storage
  //     useEffect(() => {
  //       try {
  //         const UID = localStorage.getItem("accesstoken") || "";
  //         if (UID === "") {
  //           router.push("/login");
  //           return;
  //         }
  //         // console.log(UID);
  //       getUser(UID);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }, []);

  //   // console.log(allUser)
  //   return (
  //     <>
  //       <div className="flex bg-slate-400">
  //         <div className="w-1/4 overflow-y-auto h-fit">
  //           <Left handler={handleState} />
  //         </div>
  //         <div className="flex justify-center w-3/4 overflow-y-auto bg-slate-200 rounded-tl-3xl rounded-bl-3xl">
  //           {currentComponent === "Dashboard" && (
  //             <Dashboard value={user} value2={allUser} value3={AllProducts} />
  //           )}
  //           {currentComponent === "Products" && (
  //             <Products value={AllProducts} value2={user.productdeliverd} />
  //           )}
  //           {currentComponent === "AddProduct" && (
  //             <AddProduct UID={auid} value={user.shopname} />
  //           )}
  //           {currentComponent === "DeleteMyProduct" && (
  //             <DeleteMyProduct value={user} />
  //           )}
  //           {currentComponent === "DeleteSellerProduct" && (
  //             <DeleteSellerProduct />
  //           )}
  //           {currentComponent === "DeleverProduct" && <DeleverProduct />}
  //           {currentComponent === "users" && (
  //             <AllUsers value={allUser.customer} />
  //           )}
  //           {currentComponent === "sellers" && (
  //             <AllSellers value={allUser.seller} />
  //           )}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  if (user === false) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-3xl">
        <Spinner color="purple" aria-label="Purple spinner example" size="xl" />
      </div>
    );
  }

  if (user === true) {
    // string
    // console.log(uid);

    // object
    // console.log(userData);

    // object
    // console.log( allUserData);

    // 
    // console.log(allProductData);



    

// console.log(userData)
    return (
          <>
            <div className="flex bg-slate-400">
              <div className="w-1/4 overflow-y-auto h-fit">
                <Left handler={handleState} />
              </div>
              <div className="flex justify-center w-3/4 overflow-y-auto bg-slate-200 rounded-tl-3xl rounded-bl-3xl">
                {currentComponent === "Dashboard" && (
                  <Dashboard value={UserData} />
                )}
                {currentComponent === "Products" && (
                  <Products value={UserData.productdeliverd} />
                )}
                {currentComponent === "AddProduct" && (
                  <AddProduct UID={uid} value={UserData.shopname} />
                )}
                {currentComponent === "DeleteMyProduct" && (
                  <DeleteMyProduct value={UserData} />
                )}
                {currentComponent === "DeleteSellerProduct" && (
                  <DeleteSellerProduct />
                )}
                {currentComponent === "DeleverProduct" && <DeleverProduct />}
                {currentComponent === "users" && (
                  <AllUsers />
                )}
                {currentComponent === "sellers" && (
                  <AllSellers />
                )}
              </div>
            </div>
          </>
        );


  }
}
export default Admin;
