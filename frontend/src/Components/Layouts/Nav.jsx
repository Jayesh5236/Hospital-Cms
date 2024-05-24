import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar
      position="static"
      className="bg-gradient-to-r from-fuchsia-300 to-sky-900"
    >
      <NavbarBrand>
        <img
          src="https://img.freepik.com/free-vector/doctor-office-logo-template_23-2149665578.jpg?w=740&t=st=1716574465~exp=1716575065~hmac=78119514351abf7f22e5663d03aa1c37c284c1d78b0d6918c8947218a6283936"
          alt="Logo"
          className="h-14 w-16 rounded "
        />
        <p className="font-bold text-white">INS-Hospital</p>
      </NavbarBrand>
      <NavbarContent className="flex-grow justify-center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Patient
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button
          className="hidden lg:flex bg-gradient-to-tr from-green-500 to-pink-500 text-white shadow-lg p-2 rounded-lg mr-2"
        >
          <Link href="#" color="white">
            Login
          </Link>
        </Button>
        <Button
          as={Link}
          color="foreground"
          href="#"
          variant="flat"
          className="hidden lg:flex bg-gradient-to-tr from-green-500 to-pink-500 text-white shadow-lg p-2 rounded-lg"
        >
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
