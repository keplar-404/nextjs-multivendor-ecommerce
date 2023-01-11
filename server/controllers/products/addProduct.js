import Products from "../../models/productsModel"
const addproduct = async(req, res, next) => {
    const { name, title, description, images, price, stock, category, shopname } = req.body

    try {
        const newProduct = await new Products({
            name: name,
            title: title,
            description: description,
            images:images,
            price: price,
            stock: stock,
            category: category,
            shopname: shopname
        })
      await newProduct.save(()=> {
            res.status(201).json({
                message: 'Product is created',
                data: newProduct
            })
        })
    } catch (err) {
        res.status(400).json({
            msg: err.message
        })
    }
}
export default addproduct