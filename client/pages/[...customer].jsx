import { useEffect, useState } from "react";
import Dashboard from "../components/customer/Dashboard";
import Left from "../components/customer/Left";
import Order from "../components/customer/right/Order";
import UpdateProfile from "../components/customer/right/UpdateProfile";
import axios from "axios";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";

function customer() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [accesstoken, setAccesstoken] = useState("");
  const [customer, setCustomer] = useState("");
  const router = useRouter();

  useEffect(() => {
    const accesstoken =
      JSON.parse(window.localStorage.getItem("accesstoken")) || "";

    if (accesstoken === "") router.push("/login");

    axios
      .post("http://localhost:5000/getuser", {
        uid: accesstoken,
      })
      .then((data) => {
        if (data.data.message === "customer") {
          setAccesstoken(accesstoken);
          setCustomer(data.data.data[0]);
        } else {
          router.push("/login");
          return;
        }
      });
  }, []);

  if (accesstoken === "") {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Spinner color="purple" aria-label="Purple spinner example" size="xl" />
      </div>
    );
  }

  return (
    <>
      <div className="flex bg-slate-400">
        <div className="w-1/4 h-full">
          <Left setCurrentComponent={setCurrentComponent} data={customer} />
        </div>
        <div className="flex justify-center w-3/4 bg-slate-200 rounded-tl-3xl rounded-bl-3xl">
          {currentComponent === "Dashboard" && <Dashboard data={customer} />}
          {currentComponent === "Order" && <Order data={customer} />}
          {currentComponent === "UpdateProfile" && <UpdateProfile accesstoken={accesstoken} />}
        </div>
      </div>
    </>
  );
}

export default customer;
