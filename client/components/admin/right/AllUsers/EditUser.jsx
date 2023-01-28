import Image from "next/image";
import pr from "../../../../public/img/pr.png"
function EditUser({ setEdit }) {
    return ( 
        <>
         <div className="absolute flex flex-col items-center justify-center p-4 mt-12 rounded-lg ml-96 bg-slate-600">
<Image src={pr} width={50} height={50} alt="sjkl"/>
<form action="" className="flex flex-col">
    <label htmlFor="username">
        Username
        <input type="text" id="username" className="mt-3 ml-2 rounded-md" />
    </label>
    <label htmlFor="password">
    Password
        <input type="password" id="password" className="mt-3 ml-2 rounded-md" />
    </label>
</form>
<div className="flex gap-3">

<button className="pl-3 pr-3 mt-5 bg-red-500 rounded-lg" onClick={() => setEdit(false)}>Cencle</button>
<button className="pl-3 pr-3 mt-5 bg-green-400 rounded-lg" onClick={() => setEdit(false)}>Update</button>
</div>

        </div>
        </>
     );
}

export default EditUser;