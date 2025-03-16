import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdPhoneCallback, MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot, FaWhatsapp, FaGithub, FaInstagram, FaLinkedin,FaVrCardboard,FaHeadphones,FaClock,FaGamepad
  ,FaChevronDown,FaChevronUp
} from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { news } from "../Utility/data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import Additem from "./Additem";

function Footer() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
  };
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const ScrollToTop = () => {
    window.scrollTo(0,0)
   }

  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-700 text-white py-16 px-8 rounded-t-xl mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div>
          <div className="flex items-center gap-3">
            <IoHeadsetSharp className="text-5xl" />
            <h1 className="text-4xl font-bold">Earphone</h1>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <MdPhoneCallback className="text-3xl" />
              <h2 className="text-lg font-medium">+91 9344245993</h2>
            </div>
            <div className="flex items-center gap-3">
              <MdMarkEmailRead className="text-3xl" />
              <h2 className="text-lg font-medium">kmanoj71737@gmail.com</h2>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-3xl" />
              <h2 className="text-lg font-medium">Darasuram, Kumbakonam</h2>
            </div>
          </div>
        </div>

        
        <div>
          <h1 className="text-3xl font-semibold mb-5">Quick Links</h1>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-lg hover:text-yellow-300 transition">Home</Link>
           <div className='relative cursor-pointer'>
                       <button 
                         className='flex items-center gap-3'
                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                       >
                         Shop {isDropdownOpen ? <FaChevronUp className='text-xl'/> : <FaChevronDown  className='text-xl'/>}
                       </button>
           
                       
                       {isDropdownOpen && (
                         <ul className='absolute left-0 top-10 bg-red-600 text-white w-56 rounded-md shadow-lg'>
                           <Link to="/joysticks"><li className='flex items-center gap-2 px-4 py-2 hover:bg-red-700' onClick={ScrollToTop}><FaGamepad /> Joysticks</li></Link>
                           <Link to="/smartwatchs"><li className='flex items-center gap-2 px-4 py-2 hover:bg-red-700' onClick={ScrollToTop}><FaClock /> Smartwatches</li></Link>
                           <Link to="/headphones"><li className='flex items-center gap-2 px-4 py-2 hover:bg-red-700' onClick={ScrollToTop}><FaHeadphones /> Headphones</li></Link>
                           <Link to="/audiospeakers"><li className='flex items-center gap-2 px-4 py-2 hover:bg-red-700' onClick={ScrollToTop}><FaVolumeUp /> Audiospeakers</li></Link>
                           <Link to="/virtualrealitys"><li className='flex items-center gap-2 px-4 py-2 hover:bg-red-700' onClick={ScrollToTop}><FaVrCardboard /> Virtual Reality</li></Link>
                         </ul>
                       )}
                     </div>
            <Link to="/about" className="text-lg hover:text-yellow-300 transition">About</Link>
            <Link to="/contact" className="text-lg hover:text-yellow-300 transition">Contact</Link>
          </div>
        </div>

        
        <div>
          <h1 className="text-3xl font-semibold mb-5">New Arrivals</h1>
          <div className="space-y-5">
            {news.slice(0, 2).map((product, index) => (
              <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
                <img src={product.img} alt={product.tittle} className="w-20 h-20 rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold">{product.tittle}</h2>
                  <h3 className="text-sm font-medium">{product.price}</h3>
                  <button
                    className="mt-2 px-3 py-1 bg-yellow-400 text-black rounded-lg text-sm font-semibold hover:bg-yellow-500"
                    onClick={() => addcart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://wa.me/919344245993">
            <FaWhatsapp  className="text-2xl cursor-pointer hover:text-blue-400 transition" />
          </a>
          
          <a href="https://www.instagram.com/the_manoj_king_?igsh=MXU3c3o4bmNrb3Y5bQ==">
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-400 transition" />
          </a>
          
          <a href="https://www.linkedin.com/in/manojkumar2005">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 transition" />
          </a>

          <a href="https://github.com/themanojking">
           <FaGithub  className="text-2xl cursor-pointer hover:text-blue-600 transition"/>
          </a>
        </div>
        <p className="mt-4 text-lg opacity-75 ">© 2025 Earphone. All rights reserved || Design and Developed By Manojkumar</p>
      </div>

      <Additem />
    </footer>
  );
}

export default Footer;
