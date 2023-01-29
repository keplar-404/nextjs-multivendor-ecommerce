import { auth } from "../../../firebase/Authentication";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Avatar } from "flowbite-react";

function Left({ handler, user }) {
  const { shopname, username, profilepic } = user;
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-y-4">
        {profilepic == "" ? (
          <Avatar rounded={true} />
        ) : (
          <Avatar img={profilepic} alt="profile pic" rounded={true} size="lg" />
        )}
        <p>Shop name : {shopname}</p>
        <p>Username: {username}</p>

        <button
          onClick={() => handler("Dashboard")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Dashboard
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>

        <button
          onClick={() => handler("Products")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Products
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("AddProduct")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Add or update Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteProduct")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Delete Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("Order")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Order
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("UpdateProfile")}
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
