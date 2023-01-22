import Products from "./Products"

function FeatureProducts () {
    return(
        <>
        <div className="flex flex-col items-center justify-center w-full mt-28">
            <h1 className="text-2xl">Top rated Products</h1>
            <p className="mt-5">New collection</p>
        </div>
        <div className="grid grid-cols-5 px-12 mt-6 gap-7 gap-y-8">
            <Products/>
        </div>
        </>
    )
}
export default FeatureProducts