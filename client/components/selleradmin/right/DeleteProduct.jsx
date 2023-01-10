import Image from "next/image";
import pr from "../../../public/img/pr.png";
function DeleteProduct() {
  return (
    <>
      <div className="h-screen">
        <form className="flex flex-col gap-4 my-auto mt-4">
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            id="productname"
            className="rounded-lg border-gray-300 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-4 pt-2 pb-2 bg-green-200 rounded-lg w-64"
          >
            check
          </button>
        </form>

        <div className="grid grid-cols-5 gap-3 pt-36 pb-6">
          <Image src={pr} width={50} height={50} />
          <Image src={pr} width={50} height={50} />
          <Image src={pr} width={50} height={50} />
          <Image src={pr} width={50} height={50} />
          <Image src={pr} width={50} height={50} />
        </div>
        <p>Product name : jju25</p>
        <p>Price : 25</p>
        <p>Rating : 5</p>
        <button
          className="mt-4 pt-2 pb-2 bg-red-200 rounded-lg w-64"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteProduct;
