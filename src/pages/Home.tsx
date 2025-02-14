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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 mt-16">
        <h1 className="text-6xl font-extrabold mb-6 text-blue-800 dark:text-blue-300">AFYA ON THE GO</h1>
        <h3 className="text-2xl mb-6 text-gray-700 dark:text-gray-300">Your Trusted Digital Healthcare Partner</h3>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          Get Started
        </Button>
      </div>

      {/* Image Slideshow */}
      <div className="flex justify-center mt-10 h-[500px] w-full">
        <Carousel className="rounded-xl shadow-xl border-2 border-blue-400 overflow-hidden">
          <img src={slideshow1} alt="slideshow1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <img src={slideshow2} alt="slideshow2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <img src={slideshow3} alt="slideshow3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </Carousel>
      </div>

      {/* About Section */}
      <section id="about" className="my-16 scroll-mt-20">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="my-16 scroll-mt-20">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-16 scroll-mt-20">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Afya On The Go. All rights reserved.
      </footer>
    </div>
  );
}

