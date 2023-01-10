import { useState } from "react";
import DetailsProduct from "./DetailsProduct";
function DeleverProduct() {
    const [state, setState] = useState(false)
    const [details, setDetails] = useState(false)
    return ( 
        <>
         <div className="w-11/12 pt-6 h-screen">
          <div>
            <p className="text-2xl">Delever Product</p>
          </div>
          <div className="grid grid-cols-6 gap-8 bg-white rounded-xl mt-9">
            <div className="text-center pt-7 pb-7">
              <p>User name</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <p>Email</p>
            
            </div>
            <div className="text-center pt-7 pb-7">
              <p>Products Quentity</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <p>Delever Method</p>
            </div>
            <div className="text-center pt-7 pb-7">
              <button className="bg-slate-300 pr-3 pl-3 rounded-lg" onClick={() => setDetails(true)}>Details</button>
            </div>
            <div className="text-center pt-7 pb-7">
              <button className="bg-slate-300 pr-3 pl-3 rounded-lg disabled:bg-green-400" disabled={state} onClick={() => setState(true)}>Delever</button>
            </div>
          </div>
        </div>
        { details===true ? <DetailsProduct setDetails={setDetails}/> : ""}
        </>
     );
}

export default DeleverProduct;