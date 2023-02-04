import Image from "next/image";
import pr from "../../../../public/img/pr.png"
function Product({ data }) {
  const calRating = data.rating.reduce((acc, value)=> acc + value, 0) / data.rating.length
  const rating = calRating.toFixed(1)
  // console.log(rating)
  return (
    <>
      
        <Image src={pr} alt="jsdkl" width={50} height={50} className="w-10 mx-auto"/>
        <p className="mt-3">{data.name}</p>
        <p className="mt-3">{data.stock}</p>
        <p className="mt-3">{data.price}</p>
        <p className="mt-3">{data.category}</p>
        <p className="mt-3">{rating}</p>
        <p className="mt-3">{data.shopname}</p>

    </>
  );
}

export default Product;
