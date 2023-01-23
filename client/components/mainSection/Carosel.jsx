import { Carousel } from "flowbite-react";
import none from "../../public/img/nione.jpg";
import niketwo from "../../public/img/regis-hari-bouchard-ZjViL8qxihM-unsplash.jpg";
import shone from "../../public/img/pexels-david-bartus-297933.jpg";
import girlone from "../../public/img/jsdfj(2).png";
import head1 from "../../public/img/icons8-team-7LNatQYMzm4-unsplash.jpg";
import head2 from "../../public/img/ervo-rocks-Zam8TvEgN5o-unsplash.jpg";
import Image from "next/image";

function Carosel() {
  return (
    <>
      <div className="container grid h-56 grid-cols-2 gap-4 pt-16 px-11 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <Image
            src={none}
            height={4000}
            width={4000}
            className="w-fit"
            alt="s1"
          />
          <Image src={shone} height={4000} width={4000} className="" alt="t1" />
          <Image
            src={head1}
            height={4000}
            width={4000}
            className="w-fit"
            alt="h1"
          />
        </Carousel>

        <Carousel indicators={false} className="mt-10">
          <Image src={niketwo} height={4000} width={4000} className="w-fit" alt="s2"/>
          <Image src={girlone} height={1000} width={2000} className="w-fit" alt="t2"/>
          <Image src={head2} height={1000} width={2000} className="w-fit" alt="h2"/>
        </Carousel>
      </div>
    </>
  );
}
export default Carosel;
