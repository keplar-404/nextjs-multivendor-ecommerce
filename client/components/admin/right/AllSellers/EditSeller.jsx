import Image from "next/image";
import pr from "../../../../public/img/pr.png";
function EditSeller({ setEdit }) {
  return (
    <>
      <div className="p-4 ml-96 mt-12 rounded-lg absolute flex flex-col justify-center items-center bg-slate-600">
        <Image src={pr} width={50} height={50} />
        <form action="" className="flex flex-col">
          <label htmlFor="username">
            Username
            <input type="text" id="username" className="mt-3 ml-2 rounded-md" />
          </label>
          <label htmlFor="Email">
            Email
            <input
              type="Email"
              id="Email"
              className="mt-3 ml-2 rounded-md"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              className="mt-3 ml-2 rounded-md"
            />
          </label>
          <label htmlFor="Shop name">
            Shop name
            <input
              type="text"
              id="Shop name"
              className="mt-3 ml-2 rounded-md"
            />
          </label>
        </form>
        <div className="flex gap-3">
          <button
            className="bg-red-500 pr-3 pl-3 rounded-lg mt-5"
            onClick={() => setEdit(false)}
          >
            Cencle
          </button>
          <button
            className="bg-green-400 pr-3 pl-3 rounded-lg mt-5"
            onClick={() => setEdit(false)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditSeller;
