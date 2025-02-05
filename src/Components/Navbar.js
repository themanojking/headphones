import React from 'react';
import { Link } from 'react-router-dom';
import {  FaBars, FaTimes } from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { useState } from 'react';
import { useSelector } from 'react-redux';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const cartproducts = useSelector(state =>state.cart)

  return (
    <>
    <div className='fixed w-[100%] top-0 '>
    <header className='flex justify-between  items-center p-5 bg-white shadow-md'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <div className='text-3xl font-bold'>
           <IoHeadsetSharp />
        </div>
         <div>
          <h1 className='text-2xl font-bold text-red-600  '>Earphone</h1>
         </div>
      </div>

      {/* Desktop Nav */}
      <nav >
        <ul className='hidden lg:flex gap-10 items-center text-xl font-bold'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/shop'><li>Shop</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/cart'>
        <button className='px-3 py-2 text-xl font-semibold text-white bg-red-600 rounded-lg hover:bg-black'>
            Cart ({cartproducts.length})
        </button>
        </Link>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className='lg:hidden text-3xl' 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md lg:hidden flex flex-col items-center gap-5 py-5 text-xl font-bold'>
          <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/projectS' onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
          <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to='/cart' onClick={() => setIsOpen(false)}>
            <button className='px-3 py-2 text-xl font-semibold text-white bg-red-600 rounded-lg hover:bg-black'>
              Cart ({cartproducts.length})
            </button>
           </Link>
        </div>
      )}
    </header>
    </div>
    </>
  );
}

export default Nav;
