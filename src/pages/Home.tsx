import React from "react";
import { Button } from "flowbite-react";
import Navbar from "../components/Navbar";
import slideshow1 from "../assets/images/slideshow1.jpg";
import slideshow2 from "../assets/images/slideshow2.jpg";
import slideshow3 from "../assets/images/slideshow3.jpg";
import { Carousel } from "flowbite-react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-gray-900 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h1 className="mb-6 text-6xl font-extrabold text-blue-800 dark:text-blue-300">
          AFYA ON THE GO
        </h1>
        <h3 className="mb-6 text-2xl text-gray-700 dark:text-gray-300">
          Your Trusted Digital Healthcare Partner
        </h3>
        <Button className="transform rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700">
          Get Started
        </Button>
      </div>

      {/* Image Slideshow */}
      <div className="mt-10 flex h-[500px] w-full justify-center">
        <Carousel className="overflow-hidden rounded-xl border-2 border-blue-400 shadow-xl">
          <img
            src={slideshow1}
            alt="slideshow1"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <img
            src={slideshow2}
            alt="slideshow2"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <img
            src={slideshow3}
            alt="slideshow3"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </Carousel>
      </div>

      {/* About Section */}
      <section className="my-16">
        <About />
      </section>
      {/* Services Section */}
      <section className="my-16">
        <Services />
      </section>

      {/* Contact Section */}
      <section className="my-16">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-4 text-center text-white">
        &copy; {new Date().getFullYear()} Afya On The Go. All rights reserved.
      </footer>
    </div>
  );
}
