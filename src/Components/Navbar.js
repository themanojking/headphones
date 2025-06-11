import React, { useState } from "react";
import { Link, } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGamepad,
  FaClock,
  FaHeadphones,
  FaVolumeUp,
  FaVrCardboard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { BsPersonFillAdd } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartproducts = useSelector((state) => state.cart);

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  
 

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      <header className="flex justify-between items-center p-5">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">
            <IoHeadsetSharp />
          </div>
          <h1 className="text-2xl font-bold text-red-600">Earphone</h1>
        </div>

        <div>
          <nav className="hidden lg:flex gap-10 items-center text-xl font-bold">
            <Link to="/">Home</Link>

            <div className="relative cursor-pointer ">
              <button
                className="flex items-center gap-3"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Shop{" "}
                {isDropdownOpen ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 top-10 bg-red-600 text-white w-56 rounded-md shadow-lg">
                  <Link to="/joysticks">
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                      onClick={ScrollToTop}
                    >
                      <FaGamepad /> Joysticks
                    </li>
                  </Link>
                  <Link to="/smartwatchs">
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                      onClick={ScrollToTop}
                    >
                      <FaClock /> Smartwatches
                    </li>
                  </Link>
                  <Link to="/headphones">
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                      onClick={ScrollToTop}
                    >
                      <FaHeadphones /> Headphones
                    </li>
                  </Link>
                  <Link to="/audiospeakers">
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                      onClick={ScrollToTop}
                    >
                      <FaVolumeUp /> Audiospeakers
                    </li>
                  </Link>
                  <Link to="/virtualrealitys">
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                      onClick={ScrollToTop}
                    >
                      <FaVrCardboard /> Virtual Reality
                    </li>
                  </Link>
                </ul>
              )}
            </div>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/cart">
            <div className="relative">
              <div>
                <RiShoppingCart2Line className="text-3xl " />
              </div>
              <div className="">
                <span className="absolute -right-2 -top-2  bg-red-500 text-white px-1 rounded-full">
                  {cartproducts.length}
                </span>
              </div>
            </div>
          </Link>
          <Link to="/signup">
            <BsPersonFillAdd className="flex items-center text-3xl" />
          </Link>
        </div>

        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 text-xl font-bold z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2"
            >
              Shop {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isDropdownOpen && (
              <ul className="bg-red-600 text-white w-56 rounded-md shadow-lg mt-2">
                <Link to="/joysticks">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                    onClick={ScrollToTop}
                  >
                    <FaGamepad /> Joysticks
                  </li>
                </Link>
                <Link to="/smartwatchs">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                    onClick={ScrollToTop}
                  >
                    <FaClock /> Smartwatches
                  </li>
                </Link>
                <Link to="/headphones">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                    onClick={ScrollToTop}
                  >
                    <FaHeadphones /> Headphones
                  </li>
                </Link>
                <Link to="/audiospeakers">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                    onClick={ScrollToTop}
                  >
                    <FaVolumeUp /> Audiospeakers
                  </li>
                </Link>
                <Link to="/virtualrealitys">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-700"
                    onClick={ScrollToTop}
                  >
                    <FaVrCardboard /> Virtual Reality
                  </li>
                </Link>
              </ul>
            )}
          </div>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          
          {/* <div className="flex items-center gap-5">
            <Link to="/cart">
              <div className="relative">
                <div>
                  <RiShoppingCart2Line className="text-3xl " />
                </div>
                <div className="">
                  <span className="absolute -right-2 -top-2  bg-red-500 text-white px-1 rounded-full">
                    {cartproducts.length}
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <BsPersonFillAdd className="flex items-center text-3xl" />
            </Link>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Nav;
