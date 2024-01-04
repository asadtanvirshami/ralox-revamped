import React from "react";
import state from "@/store";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../../../public/a_white.png";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropDown, setIsDropDown] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleClick = (type) => {
    if (type == "login") {
      state.openAuthModal = true;
      state.authModalType = "login";
    }
    if (type == "signup") {
      state.openAuthModal = true;
      state.authModalType = "signup";
    }
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={Logo} style={{ width: "10%", height: "10%" }} alt="alt" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={Logo} style={{ width: "10%", height: "10%" }} alt="alt" />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-gray-300" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Industries
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Consultancy
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link
            className="text-orange-200 cursor-pointer"
            onClick={() => handleClick("login")}
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            onClick={() => handleClick("signup")}
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown isOpen={isDropDown} placement="bottom-end">
          <DropdownTrigger className=" cursor-pointer"  onClick={() => setIsDropDown((prev) => !prev)}>
            <Avatar
              isBordered
              as="button"
              className="cursor-pointer transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
            >
              A
            </Avatar>
            
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NavHeader;
