import Image from "next/image";
import pr from "../../../../public/img/pr.png"
function Product() {
  return (
    <>
      
        <Image src={pr} width={50} height={50} className="w-10 mx-auto"/>
        <p className="mt-3">2</p>
        <p className="mt-3">2</p>
        <p className="mt-3">2</p>
        <p className="mt-3">2</p>
        <p className="mt-3">2</p>
        <p className="mt-3">2</p>

    </>
  );
}

export default Product;
