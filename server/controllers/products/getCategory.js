import Category from "../../models/category"
const getCategory = async (req, res, next) => {
  const allCategory =  await Category.find().select('-_id -__v')
  res.status(200).json(allCategory)
}
export default getCategory