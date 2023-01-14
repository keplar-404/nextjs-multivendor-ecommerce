import { Label, TextInput, Button } from "flowbite-react";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Triangle } from "react-loader-spinner";

// Global variable
let exitsUsername = "";
let exitsEmail = "";
let exitsShopName = "";

// main function
function Seller() {
  //ref hooks
  const email = useRef("");
  const username = useRef("");
  const shopname = useRef("");
  const password = useRef("");
  const rePassword = useRef("");

  //useStatehooks
  const [e, setE] = useState("");
  const [u, setU] = useState("");
  const [S, setS] = useState("");
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [exitsusername, setexitsusername] = useState("");
  const [exitsemail, setexitsemail] = useState("");
  const [exitsshopname, setexitsshopname] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Setting exitsemail exitsusername value when anytime this function is calling
    setexitsemail("");
    setexitsusername("");
    setexitsshopname("");

    //getting value of form information
    const Email = email.current.value;
    const Username = username.current.value;
    const Shopname = shopname.current.value;
    const Password = password.current.value;
    const RePassword = rePassword.current.value;

    // validation
    // You can validate data as your wish
    // 1. email validation
    if (Email === "" || !Email.includes("@")) {
      setE("e");
    } else {
      setE("");
    }
    // 2. usename validation
    if (Username === "") {
      setU("u");
    } else {
      setU("");
    }
    // 3. shop name validation
    if (Shopname === "") {
      setS("S");
    } else {
      setS("");
    }
    // 4. password validation
    if (Password === "" || Password.length < 8) {
      setP("p");
    } else {
      setP("");
    }
    // 5. repete password validation
    if (RePassword !== Password) {
      setR("r");
    } else {
      setR("");
    }

    setLoading(true);

    // creating seller account
    axios
      .post("http://127.0.0.1:5000/registerseller", {
        email: Email,
        password: Password,
        username: Username,
        shopname: Shopname,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Seller created successfully") {
          router.push("/login");
        } else {
          if (res.data.message === "User name has already taken") {
            exitsUsername = res.data.message;
            setexitsusername("exitsusername");
            setLoading(false);
          } else {
            exitsUsername = "";
            setexitsusername("");
          }
          if (res.data.message === "Email has already taken") {
            exitsEmail = res.data.message;
            setexitsemail("exitsemail");
            setLoading(false);
          } else {
            exitsEmail = "";
            setexitsemail("");
          }
          if (res.data.message === "Shop name has already taken") {
            exitsShopName = res.data.message;
            setexitsshopname("exitsshopname");
            setLoading(false);
          } else {
            exitsShopName = "";
            setexitsshopname("");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
            ref={email}
          />
          {e === "e" ? (
            <p className="text-sm text-red-700">
              Please input this field with a valid email address
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="shehab123"
            required={true}
            shadow={true}
            ref={username}
          />
          {u === "u" ? (
            <p className="text-sm text-red-700">Please input a username</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="shop" value="Shopname" />
          </div>
          <TextInput
            id="shop"
            type="text"
            placeholder="jajars"
            required={true}
            shadow={true}
            ref={shopname}
          />
          {S === "s" ? (
            <p className="text-sm text-red-700">Please input your shop name</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
            shadow={true}
            ref={password}
          />
          {p === "p" ? (
            <p className="text-sm text-red-700">
              Please input at least 8 chracter
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required={true}
            shadow={true}
            ref={rePassword}
          />
          {r === "r" ? (
            <p className="text-sm text-red-700">
              This filed does not match to password field
            </p>
          ) : (
            ""
          )}
        </div>
        <Button type="submit"  disabled={loading ? true : false}>
        {loading === true ? (
            <Triangle
              height="21"
              width="21"
              color="white"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <p>Register new account</p>
          )}
        </Button>
        {exitsusername === "exitsusername" ? (
          <p className="text-sm text-red-700">{exitsUsername}</p>
        ) : (
          ""
        )}
        {exitsemail === "exitsemail" ? (
          <p className="text-sm text-red-700">{exitsEmail}</p>
        ) : (
          ""
        )}
        {exitsshopname === "exitsshopname" ? (
          <p className="text-sm text-red-700">{exitsShopName}</p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default Seller;
