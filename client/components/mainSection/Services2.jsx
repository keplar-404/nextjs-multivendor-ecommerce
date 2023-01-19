import { MdLocalShipping } from "react-icons/md";
import ff from "../../public/img/ff.png";
import ff2 from "../../public/img/ff2.png";
import tt3 from "../../public/img/tt3.png";
import tt4 from "../../public/img/tt4.png";
import t5 from "../../public/img/t5.png";
import Image from "next/image";

function Services() {
  return (
    <>
      <div className="mt-36 container flex flex-row gap-24 items-center justify-center">
        <div className="bg-white px-9 rounded-xl drop-shadow-lg flex flex-col justify-center items-center">
          <br />
          <Image
            src={ff}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="bg-orange-200 text-blue-600 px-2 rounded">
            Free delevary
          </p>
          <br />
        </div>
        <div className="bg-white px-9 rounded-xl drop-shadow-lg flex flex-col justify-center items-center">
          <br />
          <Image
            src={ff2}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="bg-yellow-200 text-blue-600 px-2 rounded">
            Online order
          </p>
          <br />
        </div>
        <div className="bg-white px-9 rounded-xl drop-shadow-lg flex flex-col justify-center items-center">
          <br />
          <Image
            src={tt3}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="bg-blue-200 text-blue-600 px-2 rounded">Save money</p>
          <br />
        </div>
        <div className="bg-white px-9 rounded-xl drop-shadow-lg flex flex-col justify-center items-center">
          <br />
          <Image
            src={tt4}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="bg-violet-200 text-blue-600 px-2 rounded">Happy sell</p>
          <br />
        </div>
        <div className="bg-white px-9 rounded-xl drop-shadow-lg flex flex-col justify-center items-center">
          <br />
          <Image
            src={t5}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="bg-lime-300 text-blue-600 px-2 rounded">24/7 Support</p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Services;
