import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useRef, useState } from "react";
import { signIn } from "../firebase/Authentication";

function Login() {
  const email = useRef("");
  const password = useRef("");

  const [e, setE] = useState("");

  const [p, setP] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = email.current.value;
    const Password = password.current.value;

    // console.log( typeof(Email), Email, "email" );
    // console.log( typeof(Password), Password );

    // You can validate data as your wish
    // 1. email validation
    if (Email === "" || !Email.includes("@")) {
      setE("e");
      return;
    } else {
      setE("");
    }
    // 2. password validation
    if (Password === "" || Password.length < 8) {
      setP("p");
      return;
    } else {
      setP("");
    }

    signIn(Email, Password);
  };
  return (
    <>
      <form className="flex flex-col gap-4 w-96">
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
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </>
  );
}

export default Login;
