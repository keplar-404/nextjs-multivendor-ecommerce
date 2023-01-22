import AllProducts from "./AllProduct";
import { data } from "../../dummy"

function Right() {
    return ( 
        <>
        <div className="grid grid-cols-4 gap-y-6">
        <AllProducts/>
        </div>
        
        </>
     );
}

export default Right;