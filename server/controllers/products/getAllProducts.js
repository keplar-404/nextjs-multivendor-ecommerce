import Products from "../../models/productsModel"

const getAllProducts = async(req, res, next) => {
    try {
       const allProducts = await Products.find()
       res.status(200).json({
        data: allProducts
       })
    } catch (err) {
        res.status(500).json({
            message: 'there is no product',
            data: err.message
        })
    }
}
export default getAllProducts