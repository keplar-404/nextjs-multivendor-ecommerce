import { Label, TextInput, Button } from "flowbite-react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

// Global variable
let exitsUsername = "";
let exitsEmail = "";

// Main function
function Customer() {
  //ref hooks
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");
  const rePassword = useRef("");
  // router state for redirection to another page
  const router = useRouter();

  //useStatehooks
  const [e, setE] = useState("");
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [exitsusername, setexitsusername] = useState("");
  const [exitsemail, setexitsemail] = useState("");
  const [loading, setLoading] = useState(false);

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Setting exitsemail exitsusername value when anytime this function is calling
    setexitsemail("");
    setexitsusername("");

    //getting value of form information
    const Email = email.current.value;
    const Username = username.current.value;
    const Password = password.current.value;
    const RePassword = rePassword.current.value;

    // validation
    // You can validate data as your wish
    // 1. email validation
    if (Email === "" || !Email.includes("@")) {
      //displaying error message in the bottom
      setE("e");
      return;
    } else {
      setE("");
    }
    // 2. usename validation
    if (Username === "") {
      //displaying error message in the bottom
      setU("u");
      return;
    } else {
      setU("");
    }
    // 3. password validation
    if (Password === "" || Password.length < 8) {
      //displaying error message in the bottom
      setP("p");
      return;
    } else {
      setP("");
    }
    // 4. repete password validation
    if (RePassword !== Password) {
      //displaying error message in the bottom
      setR("r");
      return;
    } else {
      setR("");
    }

    setLoading(true);

    //creating customer account
    axios
      .post("http://127.0.0.1:5000/registercustomer", {
        email: Email,
        password: Password,
        username: Username,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "user created successfully") {
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
        <Button type="submit" disabled={loading ? true : false}>
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
      </form>
    </>
  );
}

export default Customer;
