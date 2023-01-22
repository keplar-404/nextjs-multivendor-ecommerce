import AllProducts from "./AllProduct";
import { data } from "../../dummy"

function Right() {
    return ( 
        <>
        {data.map((data)=> <AllProducts data={data}/>)}
        
        </>
     );
}

export default Right;