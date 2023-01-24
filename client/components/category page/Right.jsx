import AllProducts from "./AllProduct";

function Right({ data }) {
   
    return ( 
        <>
        <div className="grid grid-cols-4 gap-y-6">
            {data.map((data)=> <AllProducts key={data._id} data={data} /> )}
        
        </div>
        
        </>
     );
}

export default Right;