function Dashboard({ value, value2, value3 }) {
  const { totalearning, products } = value;
  const { customer, seller, admin } = value2;
  // console.log(value3)
  const Customer = customer.length;
  const Seller = seller.length;
  const Admin = admin.length;
  const totalProducts = value3.length;
  const totalUser = Customer + Seller + Admin;
  //  console.log(totalUser)
  return (
    <>
      <div className="w-11/12 pt-6 h-screen ">
        <div>
          <p className="text-2xl">Overview</p>
        </div>
        <div className="grid grid-cols-3 gap-8 bg-white rounded-xl mt-9">
          <div className="text-center pt-7 pb-7">
            <p>Total Earning</p>
            <p>${totalearning}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Total Product</p>
            <p>{totalProducts}</p>
          </div>
          <div className="text-center pt-7 pb-7">
            <p>Total user</p>
            <p>{totalUser}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
