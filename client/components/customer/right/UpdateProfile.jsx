import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function UpdateProfile() {
  return (
    <>
      <div className="container px-10 mt-12">
        <form className="flex flex-col gap-4">
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
          <div>
            <div className="block mb-2">
              <Label
                htmlFor="password1"
                value="Your password *** (fill this field to update your profile)"
              />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <Button type="submit" disabled={true}>Submit</Button>
        </form>
        <p>This updated feature will avaiable soon</p>
      </div>
    </>
  );
}

export default UpdateProfile;
