import { Label, TextInput, Button } from "flowbite-react";
import { useRef, useState } from "react";
import { auth } from "../firebase/Authentication";
import { Triangle } from "react-loader-spinner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function Login() {
  const email = useRef("");
  const password = useRef("");

  const [e, setE] = useState("");
  const [p, setP] = useState("");
  const [usrno, setUsrno] = useState("");
  const [passwordno, setPasswordno] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = email.current.value;
    const Password = password.current.value;

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
    //  const signResult =  signIn(Email, Password);
    //  console.log(signResult)
    setLoading(true);

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCrediential) => {
        localStorage.setItem(
          "accesstoken",
          JSON.stringify(userCrediential.user.uid)
        );
        location.reload();
      })
      .catch((err) => {
        const error = err.message;
        // console.log(error)
        if (error === "Firebase: Error (auth/user-not-found).") {
          setUsrno("no");
          setLoading(false);
        } else {
          setUsrno("");
        }
        if (error === "Firebase: Error (auth/wrong-password).") {
          setPasswordno("no");
          setLoading(false);
        } else {
          setPasswordno("");
        }
      });
    // setLoading(false);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full bg-slate-200">
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
          <Button type="submit" disabled={loading ? true : false}>
            {loading ? (
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
              "Login"
            )}
          </Button>
          {usrno === "no" ? (
            <p className="text-base text-red-700 text-center">User not found</p>
          ) : (
            ""
          )}
          {passwordno === "no" ? (
            <p className="text-base text-red-700 text-center">
              Password not matched
            </p>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
