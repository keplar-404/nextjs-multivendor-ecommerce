import { Button, Label, TextInput, FileInput } from "flowbite-react";
import { app } from "../../../firebase/Authentication";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { useState } from "react";

function UpdateProfile({ accesstoken }) {
  // console.log(accesstoken)
  let image;
  const [spinner, setSpinner] = useState(false);
  const uploadfile = (e) => {
    image = e.target.files[0] || "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    const storage = getStorage(app);
    const imgRef = ref(storage, "image");
    uploadBytes(imgRef, image)
      .then(() => {
        getDownloadURL(imgRef)
          .then((url) => {
            axios
              .post("http://127.0.0.1:5000/updateProfile", {
                uid: accesstoken,
                profilepic: url,
              })
              .then((data) => {
                setSpinner(false);
              });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  };

  if (spinner === false) {
    return (
      <>
        <div className="container px-10 mt-12">
          <form className="flex flex-col gap-4" onSubmit={(e) => onSubmit(e)}>
            <div>
              <div className="block mb-2">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="jja fok"
                required={true}
              />
            </div>
            <input
              type="file"
              onChange={uploadfile}
              className="bg-gray-300 rounded-md"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </>
    );
  } else if (spinner === true) {
    return (
      <>
        <div className="flex items-center justify-center w-full mt-7">
          <Triangle
            height="200"
            width="200"
            color="black"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </>
    );
  }
}

export default UpdateProfile;
