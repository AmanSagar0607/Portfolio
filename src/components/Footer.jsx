import React from "react";
import { Link } from "react-router-dom";
// import { navLinks } from "../constants"; // Make sure this import is correct based on your project structure
// import logo from "../assets/logo.svg"; // Make sure this import is correct based on your project structure

const Footer = () => {
    return (
        <footer className="shadow bg-primary mt-8 text-center">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Include any additional content here if needed */}
                </div>
                {/* Uncomment the following line if you want to include a horizontal rule */}
                <hr className="my-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Made with 💗 by <Link to="https://www.linkedin.com/in/amansagar0607/" className="hover:underline">Aman Sagar</Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
