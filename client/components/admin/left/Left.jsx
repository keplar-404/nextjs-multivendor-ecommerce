import Image from "next/image";
import profilePic from "../../../public/img/pr.png";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/Authentication";
import { useRouter } from "next/router";

function Left({ handler }) {
  const router = useRouter()
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-y-4 justify-center items-center">
        <p>Logo</p>
        <p>Shop name</p>
        <Image
          src={profilePic}
          width={50}
          height={50}
          alt="image description"
        />
        <p>Admin</p>

        <button
          onClick={() => handler("Dashboard")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Dashboard
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>

        <button
          onClick={() => handler("Products")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Products
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("AddProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Add Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteMyProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Delete my Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteSellerProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Delete Seller Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleverProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Delever product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("users")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Users
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("sellers")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Sellers
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => {
            signOut(auth).then(() => {
              localStorage.removeItem("accesstoken");
              router.push("/login")
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
