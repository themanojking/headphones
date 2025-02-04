import React from 'react'
import { MdPhoneCallback } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Contact() {
  return (
    <>
    <Navbar />
      <div className='p-10'>
         <div className='text-center mt-20'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Let's Connect and Create Memorable Experiences Together</h1>
            <h3 className='md:text-lg lg:text-xl font-semibold mt-2'>Reach Out of Stock,Inquiries,or just to say HELLO - We're here to Contact you</h3>
         </div>

         <div className='flex flex-wrap lg:flex-nowrap justify-center gap-12 mt-10'>
            <div className='text-center space-y-1 border shadow-lg rounded-xl p-5 w-[30rem]'>
                <div className='flex items-center justify-center'>
                  <MdPhoneCallback className='text-2xl font-bold' />
                </div>
                <h1 className='text-2xl font-bold'>Call Us</h1>
                <h2 className='text-xl font-semibold'>+91 9344245993</h2>
            </div>
            <div className='text-center space-y-2 border shadow-lg rounded-xl p-5 w-[30rem]'>
                <div className='flex items-center justify-center'>
                  <MdOutlineMarkEmailUnread  className='text-2xl font-bold'/>
                </div>
                <h1 className='text-2xl font-bold'>Email Us</h1>
                <h2 className='text-xl font-semibold'>+91 9344245993</h2>
            </div>
            <div className='text-center space-y-2 border shadow-lg rounded-xl p-5 w-[30rem]'>
                <div className='flex items-center justify-center'>
                  <MdLocationPin className='text-2xl font-bold'/>
                </div>
                <h1 className='text-2xl font-bold'>Location Us</h1>
                <h2 className='text-xl font-semibold'>Darasuram, Kumbakonam-612001</h2>
            </div>
         </div>

         <Footer />
      </div>
    
    
    </>
  )
}

export default Contact