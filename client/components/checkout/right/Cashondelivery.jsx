import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Cashondelivery() {
  const router = useRouter();
  let nameofthecustomer;
  let address;
  let mobile;

  const [loginUsr, setLoginUsr] = useState(false);

  useEffect(() => {
    const acc = JSON.parse(window.localStorage.getItem("accesstoken")) || "";
    if (acc !== "") {
      setLoginUsr(true);
    }
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();

    const allItem = JSON.parse(
      window.localStorage.getItem("realFinalAllCartDetails")
    );
    const accessToken = JSON.parse(window.localStorage.getItem("accesstoken"));

    axios
      .post("http://127.0.0.1:5000/getuser", {
        uid: accessToken,
      })
      .then((data) => {
        // console.log(data.data[0])
        const email = data.data.data[0].email;

        allItem.map((data) => {
          axios
            .post("http://127.0.0.1:5000/products/order", {
              name: data.name,
              images: data.images,
              price: data.price,
              quentity: data.stock,
              category: data.category,
              shopname: data.shopname,
              uid: accessToken,
              customeremail: email,
              address: address,
              mobile: mobile,
              nameofthecustomer: nameofthecustomer,
            })
            .then((data) => {
              if (data.data.message !== "Your order successfully received") {
                return;
              }
            });
        });
      });

    window.localStorage.removeItem("finalCartDetails");
    window.localStorage.removeItem("realFinalAllCartDetails");

    toast("Your order successfully received", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
    router.push("/");
  };
  return (
    <>
      <form className="flex flex-col gap-4 mt-4">
        <div>
          <div className="block mb-2">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Shehab"
            required={true}
            onChange={(e) => (nameofthecustomer = e.target.value)}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="name" value="Mobile number" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="+880"
            required={true}
            onChange={(e) => (mobile = e.target.value)}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="name" value="Address" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Dalal Bazar, Lakshmiput, Bangladesh"
            required={true}
            onChange={(e) => (address = e.target.value)}
          />
        </div>

        {loginUsr === true ? (
          <Button type="submit" onClick={(e) => handleOrder(e)}>
            Place order
          </Button>
        ) : (
          <Button type="submit" disabled={true}>
            You are not login please login first
          </Button>
        )}
      </form>
    </>
  );
}

export default Cashondelivery;
