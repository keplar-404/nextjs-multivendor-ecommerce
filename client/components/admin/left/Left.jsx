import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/Authentication";
import { useRouter } from "next/router";
import { Avatar } from "flowbite-react";

function Left({ handler, data, username }) {
  // console.log(data)
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-y-4">
        {data == "" ? (
          <Avatar rounded={true} />
        ) : (
          <Avatar img={data} alt="profile pic" rounded={true} size="lg" />
        )}
        <p>Shop name</p>
        <p>Admin</p>
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
          Add Product
          <p className="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("Addcategory")}
          className="transition opacity-50 group duration-600 hover:opacity-100"
        >
          Add category
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
              location.reload();
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
