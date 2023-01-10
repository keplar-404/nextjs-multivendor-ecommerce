import { Label, TextInput, Button } from "flowbite-react";
import { useRef, useState } from "react";
import { createUser } from "../../firebase/Authentication";
function Buyer() {
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");
  const rePassword = useRef("");

  const [e, setE] = useState("");
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [r, setR] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = email.current.value;
    const Username = username.current.value;

    const Password = password.current.value;
    const RePassword = rePassword.current.value;

    // console.log( typeof(Email), Email, "email" );
    // console.log( typeof(Username), Username );
    // console.log( typeof(Shopname), Shopname );
    // console.log( typeof(Password), Password );
    // console.log( typeof(RePassword), RePassword );

    // You can validate data as your wish

    // 1. email validation
    if (Email === "" || !Email.includes("@")) {
      setE("e");

      return;
    } else {
      setE("");
    }
    // 2. usename validation
    if (Username === "") {
      setU("u");

      return;
    } else {
      setU("");
    }
    // 3. password validation
    if (Password === "" || Password.length < 8) {
      setP("p");

      return;
    } else {
      setP("");
    }
    // 4. repete password validation
    if (RePassword !== Password) {
      setR("r");

      return;
    } else {
      setR("");
    }

    createUser(Email, Password);
  };
  return (
    <>
      <form className="flex flex-col gap-4 w-96" s>
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
        <Button type="submit" onClick={handleSubmit}>
          Register new account
        </Button>
      </form>
    </>
  );
}

export default Buyer;
