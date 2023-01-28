function Dashboard({ data }) {
  const { order } = data;
  // console.log(order)
  const totalSpendMoney = order.reduce(
    (acc, currentdata) => acc + currentdata.price,
    0
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center text-xl gap-y-6">
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Total order: {order.length}</p>
        <p>Total spend money: ${totalSpendMoney}</p>
      </div>
    </>
  );
}

export default Dashboard;
