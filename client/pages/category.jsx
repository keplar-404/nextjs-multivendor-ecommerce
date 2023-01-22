import Left from "../components/category page/Left";
import Right from "../components/category page/Right";

function category() {
  return (
    <>
      <div className="container w-full h-full px-14 bg-slate-100">
        <div>
          <h1 className="text-2xl text-center pt-9">All Products</h1>
        </div>
        <div className="flex flex-row pt-12">
          <div className="w-1/5">
            <Left />
          </div>
          <div className="w-4/5">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
}

export default category;
