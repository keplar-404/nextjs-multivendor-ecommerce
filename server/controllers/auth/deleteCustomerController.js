import CustomerModel from "../../models/customerModel/customerModel"
const deleteUser = async(req, res)=>{
  const { username }  = req.body
  try {
     await CustomerModel.findOneAndDelete({ username: username })
    const remain = await CustomerModel.find()
     res.status(202).json({
      message:"Customer account deleted successfully",
      remain: remain
     })

  } catch (err) {
    res.status(400).json({
        msg: err.message
    })
  }
}
export default deleteUser