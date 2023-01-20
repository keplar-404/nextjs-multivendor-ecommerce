import b2 from "../../../public/img/bc2.jpg";
import Image from "next/image";
function SpecialOffer() {
  return (
    <>
      <div className="mx-11 mt-14 flex flex-col justify-center items-center">
        <p className="text-center text-4xl">Special Offer for Winter</p>
        <hr className="h-1 w-2/5 bg-gray-300 rounded-xl mt-1" />
        <div className="w-full flex flex-row gap-x-5 mt-7">
          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b17.jpg?raw=true')]">
            <div className="flex flex-col gap-y-2 w-fit pl-14 text-white items-start">
              <p className="text-lg">Crazy deals</p>
              <p className="text-5xl">buy 1 get 1 free</p>
              <p className="text-xl">The best classic dress on sales now</p>
              <button className="mt-4 border px-8 py-2 hover:bg-white hover:text-black">
                Buy now
              </button>
            </div>
          </div>



          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b10.jpg?raw=true')]">
            <div className="flex flex-col gap-y-2 w-fit pl-14 text-white items-start">
              <p className="text-lg">spring/summer</p>
              <p className="text-5xl">Upcomming season</p>
              <p className="text-xl">The best t-shirt sales will avaiable soon</p>
              <button className="mt-4 border px-8 py-2 hover:bg-white hover:text-black">
                Get in touch
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
