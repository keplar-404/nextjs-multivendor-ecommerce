import { useState } from "react";
function Order(props) {
    const [state, setState] = useState(false)
  return (
    <>
      <div className="rounded-xl w-11/12 mt-7 bg-white  h-fit">
        <div className="grid grid-cols-5 text-center mt-3">

        <p>Customer name</p>
        <p>Product name</p>
        <p>Quentity</p>
        <p>Total Price</p>
        <p></p>


        {/* data */}
        <p className="my-5">hamid</p>
        <p className="my-5">mobiile</p>
        <p className="my-5">2</p>
        <p className="my-5">$576</p>
        <button className="my-5 cursor-pointer bg-slate-300 rounded-lg disabled:bg-green-400 w-40" disabled={state} onClick={() => setState(true)}>Delevet to admin</button>
        </div>
      </div>
    </>
  );
}
export default Order;
