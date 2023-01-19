import { Navbar, Avatar, Dropdown } from "flowbite-react";
import { IoCart } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="container px-6">
        <Navbar fluid={true} rounded={true} className="bg-slate-50">
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
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
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Log out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/navbars">Home</Navbar.Link>
            <Navbar.Link href="/navbars">Category</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
            <Navbar.Link href="/navbars">Hot sales</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
