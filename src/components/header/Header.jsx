"use client";
import { useAppContext } from "@/context/AppProvider";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaSignOutAlt, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const Header = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setIsLoggedIn, isLoggedIn, isLoading } = useAppContext();

  const handleLogout = () => {
    setIsProfileOpen(false);
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("id");
    router.push("/login");
    toast.success("Logged out...");
    setIsLoggedIn(false);
  };

  return (
    <header className="z-10 relative bg-white w-full px-4 sm:px-8 lg:px-16 shadow">
      <div className="flex items-center justify-between py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/mm.png" alt="Logo" className="h-12 w-auto sm:h-16" />
        </Link>

        {/* Center Menu Items */}
        <ul className="hidden sm:flex items-center space-x-6 font-semibold uppercase">
          
            <li>
              <Link href={"/"} className="hover:text-[#048A8F] transition duration-200">Home</Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-[#048A8F] transition duration-200">blog</Link>
            </li>
            <li>
              <Link href={"/faq"} className="hover:text-[#048A8F] transition duration-200">FAQ</Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-[#048A8F] transition duration-200">Gallery</Link>
            </li>
        
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="#courses"
            className="py-2 px-4 text-black bg-transparent rounded-md  border-2 flex items-center gap-2 hover:bg-black hover:text-white transition duration-200"
          >
            <FaGoogleScholar />
            <span>Our Courses</span>
          </Link>
          {isLoading ? (
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          ) : isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 text-lg bg-white p-3 shadow-2xl rounded-full border-gray-300 border"
              >
                <FaUser className="text-lg" />
              </button>

              {/* Profile Dropdown */}
              <div
                className={`absolute -right-16 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ease-in-out ${
                  isProfileOpen
                    ? "opacity-100 block translate-y-5"
                    : "opacity-0 hidden -translate-y-5"
                }`}
              >
                <Link
                  href="/profile"
                  onClick={() => setIsProfileOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  View Profile
                </Link>
                <button
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="inline mr-2" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="py-2 px-6 text-white bg-[#048A8F] rounded-md hover:bg-white hover:text-[#048A8F] border-[#048A8F] border-2 transition duration-200"
            >
              Login
            </Link>
          )}
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2 text-white bg-green-600 rounded-md flex items-center space-x-2 hover:bg-green-700"
          >
            <FaWhatsapp className="text-2xl"/>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md mt-2 rounded-md">
          <div className="flex flex-col p-4">
            <Link
              href="/menu1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Menu 1
            </Link>
            <Link
              href="/menu2"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Menu 2
            </Link>
            <Link
              href="/menu3"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Menu 3
            </Link>
            <Link
              href="/menu4"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Menu 4
            </Link>
            <Link
              href="/button1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Button 1
            </Link>
            <Link
              href="/button2"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Button 2
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
