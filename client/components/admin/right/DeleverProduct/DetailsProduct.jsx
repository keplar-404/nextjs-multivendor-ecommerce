import Image from "next/image";
import pr from "../../../../public/img/pr.png"
function DetailsProduct({ setDetails }) {
    return ( 
        <>
        <div className="p-4 absolute flex flex-col justify-center items-center bg-slate-600 mt-56">
<Image src={pr} width={50} height={50}/>
<p className="text-white">User name</p>
<p className="text-white">Email</p>
<p className="text-white">Product 1 | seller:umag | quentity:<span>25</span></p>
<p className="text-white">Product 2 | seller:umag | quentity:<span>25</span></p>
<p className="text-white">Product 3 | seller:umag | quentity:<span>25</span></p>
<p className="text-white">Total price : 25</p>
<button className="bg-slate-300 pr-3 pl-3 rounded-lg" onClick={() => setDetails(false)}>Cencle</button>

        </div>
        </>
     );
}

export default DetailsProduct;