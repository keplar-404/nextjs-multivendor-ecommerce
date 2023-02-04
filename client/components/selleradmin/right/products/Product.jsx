import Image from "next/image";
import pr from "../../../../public/img/pr.png";
function Product(props) {
  const { images, name, stock, sold, price, rating } = props.value;
  const calcRating = rating.reduce((acc, value)=> acc + value, 0) / rating.length
  const _rating = calcRating.toFixed(1)
  return (
    <>
      <Image
        src={pr}
        width={50}
        height={50}
        alt="hi"
        className="w-10 mx-auto"
      />
      <p className="mt-3">{name}</p>
      <p className="mt-3">{stock}</p>
      <p className="mt-3">{sold}</p>
      <p className="mt-3">{price}</p>
      <p className="mt-3">{_rating}</p>
    </>
  );
}

export default Product;
