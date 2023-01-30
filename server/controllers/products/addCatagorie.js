import Category from "../../models/category";
const addcategory = async (req, res, next) => {
  const { catagorie } = req.body;
  const exitsCategory = await Category.find({ name: catagorie }).select(
    "-_id -__v"
  );
  const st = exitsCategory.toString();
  if (st.includes(catagorie)) {
    res.status(200).json({
      message: "Category already exits",
      data: exitsCategory,
    });
    return;
  }
  try {
    const newCategory = await new Category({
      name: catagorie,
    });
    await newCategory.save(() => {
      res.status(201).json({
        message: "Category created successfully",
        data: newCategory,
      });
    });
  } catch (err) {
    res.status(400).json({
      data: err.message,
    });
  }
};
export default addcategory;
