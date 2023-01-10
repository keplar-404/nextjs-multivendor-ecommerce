import Image from "next/image";
import profilePic from "../../../public/img/pr.png";

function Left({ handler }) {
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
        <p>seller</p>

        <button
          onClick={() => handler("Dashboard")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Dashboard
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>

        <button
          onClick={() => handler("Products")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Products
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("AddProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Add Product
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleteProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Delete Product
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("DeleverProduct")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Delever product
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("users")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Users
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button
          onClick={() => handler("sellers")}
          className="group transition duration-600 opacity-50 hover:opacity-100"
        >
          Sellers
          <p class="bg-black h-0.5 max-w-0 group-hover:max-w-full transition-all duration-700"></p>
        </button>
        <button>Logout</button>
      </div>
    </>
  );
}

export default Left;
