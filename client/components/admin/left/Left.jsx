import Image from "next/image";
import profilePic from "../../../public/img/pr.png";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/Authentication";
import { useRouter } from "next/router";

function Left({ handler }) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-y-4">
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
          Add Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteMyProduct")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Delete my Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteSellerProduct")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Delete Seller Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleverProduct")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Delever product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("users")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Users
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("sellers")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Sellers
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => {
            signOut(auth).then(() => {
              localStorage.removeItem("accesstoken");
              location.reload()
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
