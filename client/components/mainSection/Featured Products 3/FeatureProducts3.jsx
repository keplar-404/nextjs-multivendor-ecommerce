import Products from "./Products"

function FeatureProducts () {
    return(
        <>
        <div className="flex flex-col justify-center items-center w-full mt-28">
            <h1 className="text-2xl">Featured Products</h1>
            <p className="mt-5">New winter collection</p>
        </div>
        <div className="grid grid-cols-5 gap-7 px-12 mt-6 gap-y-8">
            <Products/>
        </div>
        </>
    )
}
export default FeatureProducts