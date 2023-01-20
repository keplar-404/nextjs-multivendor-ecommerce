import { Button } from "flowbite-react";
import b1 from "../../public/img/b1.jpg";
import Image from "next/image";

function Discount() {
  return (
    <>
      <div className="mt-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center gap-y-4">
        <p className="text-xl text-white mt-5">Hot deals</p>
        <p className="text-5xl text-white">
          Up to <span className="text-red-600">70% off</span> - All t-Shirts &
          Accessories
        </p>
        {/* <button className="bg-white mb-5 ">Explore More</button> */}
        <Button outline={true} gradientDuoTone="tealToLime" className="mb-5">
          <span className="px-4">Explore More</span>
        </Button>
      </div>
    </>
  );
}
export default Discount;
