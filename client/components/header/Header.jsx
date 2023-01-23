import { Navbar, Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="container px-6 bg-slate-50">
        <Navbar fluid={true} rounded={true} className="bg-slate-50">
          <Navbar.Brand href="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              K.ecom
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <button className="mr-9">
              cart <span>0</span>{" "}
            </button>

            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block text-sm font-medium truncate">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Log out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link href={"/"} className="hover:text-blue-600">Home</Link>
            <Link href={"category"} className="hover:text-blue-600">Category</Link>
            <Link href={"contact"} className="hover:text-blue-600">Contact</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
