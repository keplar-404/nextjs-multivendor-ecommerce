import Image from "next/image";
import profilePic from "../../public/img/pr.png";
import { auth } from "../../firebase/Authentication";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

function Left({ setCurrentComponent }) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-y-4">
        <Image
          src={profilePic}
          width={50}
          height={50}
          alt="image description"
        />
        <p>username</p>

        <button
          onClick={() => setCurrentComponent("Dashboard")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Dashboard
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>

        <button
          onClick={() => setCurrentComponent("Order")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Order
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => setCurrentComponent("UpdateProfile")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Update Profile
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => {
            signOut(auth).then(() => {
              localStorage.removeItem("accesstoken");
              router.push("/login");
            });
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Left;