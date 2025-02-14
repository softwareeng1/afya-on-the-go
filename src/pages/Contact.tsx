import React, { Component } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export class Contact extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-10">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
          {/* Contact Form */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-blue-400">Get in Touch</h1>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Have questions or need assistance? We're here to help you.
            </p>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info & Socials */}
          <div className="p-10 bg-blue-50 dark:bg-gray-700 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900 dark:text-blue-300">Our Details</h2>
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Healthcare Ave, Nairobi, Kenya</p>
            </div>
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">support@afyaotg.com</p>
            </div>
            <div className="mb-6">
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+254 712 345 678</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
