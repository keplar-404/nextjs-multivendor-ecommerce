function Dashboard(props) {
console.log(props.value)
  const { totalearning, products, productpending } = props.value
 const totalProduct =  products.length
  return (
    <>
      <div className="w-11/12 pt-6 h-screen">
        <div>
          <p className="text-2xl">Overview</p>
        </div>
        <div className="grid grid-cols-3 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7"><p>Total Earning</p>
          <p>${totalearning}</p>
          </div>
          <div className="text-center pt-7 pb-7"><p >Total Product</p>
          <p>{totalProduct}</p>
          </div>
          <div className="text-center pt-7 pb-7"><p >Products Pending</p>
          <p>{productpending}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
