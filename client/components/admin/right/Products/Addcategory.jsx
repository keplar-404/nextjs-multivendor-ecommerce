import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

function addCategory() {
  let categoryName = "";
  const handleCategory = (e) => {
    categoryName = e.target.value;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("clk");
    axios
      .post("http://127.0.0.1:5000/products/addcategory", {
        catagorie: categoryName,
      })
      .then((data) => {
        const _data = data.data.message;
        if (_data === "Category already exits") {
          toast("Category already exits", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
          });
        } else {
          toast("Category already exits", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
        }
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="container px-56">
            <div className="block mb-2">
              <Label htmlFor="email1" value="Category name" />
            </div>
            <TextInput
              id="email1"
              type="text"
              placeholder="Electronices"
              required={true}
              onChange={handleCategory}
            />
            <Button className="w-full mt-5" onClick={handlesubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default addCategory;
