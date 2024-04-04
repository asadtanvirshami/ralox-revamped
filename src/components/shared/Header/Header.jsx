import React from "react";
import state from "@/valtio/store";

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
import Switcher from "../Switcher/Swticher";

import Image from "next/image";
import Logo from "../../../../public/a_white.png";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/actions/UserActions/userActions";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropDown, setIsDropDown] = React.useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Profile", href: "/profile", authorized: false },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Services", href: "/services" },
    { name: "Consultancy", href: "/consultancy" },
    { name: "Industries", href: "/industries" },
    { name: "Help & Feedback", href: "/contact" },
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
    <Navbar className="dark:bg-white" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        <Switcher />
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/services" className="text-gray-300" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/industries">
            Industries
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/consultancy">
            Consultancy
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {!isAuthenticated && (
        <NavbarContent justify="end">
          <NavbarItem className=" md:flex lg:flex ">
            <Link
              data-cy={"login-header-btn"}
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
      )}
      {isAuthenticated && (
        <NavbarContent as="div" justify="end">
          <Dropdown isOpen={isDropDown} placement="bottom-end">
            <DropdownTrigger
              className=" cursor-pointer"
              onClick={() => setIsDropDown((prev) => !prev)}
            >
              <Avatar
                isBordered
                as="button"
                className="cursor-pointer transition-transform"
                color="warning"
                variant="flat"
                name={user.fname.slice(0, 1).toUpperCase()}
                size="sm"
              ></Avatar>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold text-orange-200">{user.email}</p>
              </DropdownItem>
              <DropdownItem color="warning" key="configurations">
                <Link
                  href="/dashboard"
                  className="text-white text-[12px] cursor-pointer"
                >
                  Dashboard
                </Link>
              </DropdownItem>
              <DropdownItem color="warning" key="settings">
                <Link className="text-white text-[12px]  cursor-pointer">
                  Settings
                </Link>
              </DropdownItem>
              <DropdownItem
                data-cy={"logout-header-btn"}
                key="logout"
                onClick={() => {
                  dispatch(logout()), setIsDropDown(false);
                }}
                color="danger"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
      {isAuthenticated && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={() => {
                  if (index === menuItems.length - 1) {
                    dispatch(logout());
                  }
                }}
                className="w-full"
                color={"foreground"}
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
      {!isAuthenticated && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
};
export default NavHeader;
