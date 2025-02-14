import React, { Component } from 'react';
import aboutpage from "../assets/images/aboutpage.jpeg";

export class About extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Image/Visual */}
          <div className="hidden md:block">
            <img
              src={aboutpage}
              alt="Healthcare Professionals"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-800 dark:text-blue-300">About Us</h1>
            <p className="text-lg mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">Afya On The Go</span> is a premier digital healthcare platform that provides personalized, professional home-based care services. 
              Our goal is to bridge the gap between patients and certified healthcare professionals through innovative, secure, and user-friendly technology.
            </p>
            <p className="text-lg mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe in empowering communities with accessible healthcare solutions that prioritize convenience, compassion, and reliability.
            </p>
            <p className="text-lg mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              Our platform ensures seamless interaction between patients and professionals, enabling high-quality care from the comfort of your home.
            </p>
            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
