"use client";

import { Button, Navbar } from "flowbite-react";
import afyaotg from "../assets/images/afyaotg.png";

export default function Component() {
  return (
    <Navbar fluid rounded className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <Navbar.Brand href="/">
        <img src={afyaotg} className="mr-3 h-10 sm:h-12" alt="AfyaOTG Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
          AfyaOTG
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 shadow-lg transition-all duration-300">
          Get Started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-500 ease-in-out" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-500 ease-in-out">
          About
        </Navbar.Link>
        <Navbar.Link href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-500 ease-in-out">
          Services
        </Navbar.Link>
        <Navbar.Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-500 ease-in-out">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

