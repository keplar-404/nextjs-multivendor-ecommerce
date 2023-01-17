import Image from "next/image";
import pr from "../../../../public/img/pr.png"
function Product({ data }) {
  return (
    <>
      
        <Image src={pr} alt="jsdkl" width={50} height={50} className="w-10 mx-auto"/>
        <p className="mt-3">{data.name}</p>
        <p className="mt-3">{data.stock}</p>
        <p className="mt-3">{data.sold}</p>
        <p className="mt-3">{data.price}</p>
        <p className="mt-3">{data.rating}</p>

    </>
  );
}

export default Product;
