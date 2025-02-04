import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { news } from "../Utility/data";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";

function Footer() {

    const dispatch = useDispatch();

    const addcart = (product) => {
        dispatch(add(product))
    }
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between  lg:justify-normal gap-10 lg:gap-40 py-20">
        <div className=" ">
          <div className="flex items-center gap-2">
            <div className="text-5xl font-bold">
              <IoHeadsetSharp />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-red-600  ">Earphone</h1>
            </div>
          </div>
          <div className="mt-10 space-y-3">
             <div className="flex items-center gap-2">
             <MdPhoneCallback  className="text-4xl font-bold"/>
             <h2 className="text-2xl lg:text-4xl font-bold">+91 9344245993</h2>
             </div>
             <div className="flex items-center gap-2">
             <MdMarkEmailRead  className="text-4xl font-bold"/>
             <h2 className="text-2xl lg:text-4xl font-bold">deltainfo@gmail.com</h2>
             </div>
             <div className="flex items-center gap-2">
             <FaLocationDot  className="text-4xl font-bold"/>
             <h2 className="text-2xl lg:text-4xl font-bold">Darasuram,kumbakonam</h2>
             </div>
          </div>
        </div>

        <div className="">
            <h1 className="text-4xl font-bold">Menu</h1>
            <h2 className="text-2xl font-semibold">Home Page</h2>
            <h2  className="text-2xl font-semibold">Shop</h2>
            <h2  className="text-2xl font-semibold">Blog</h2>
            <h2  className="text-2xl font-semibold">About</h2>
            <h2  className="text-2xl font-semibold">Contact</h2>
        </div>

        <div>
            <h1 className="text-4xl font-bold">Our New Product</h1>
             <div className="mt-5">
                {news.map((product) => (<div className="flex items-center gap-10 space-y-5">
                       <div className="mt-5">
                       <img src={product.img} alt="" className="w-[8rem] border border-black p-2 rounded-xl"></img>
                       </div>
                        <div>
                        <h1 className="text-xl md:text-2xl font-bold">{product.tittle}</h1>
                        <h3 className="text-lg font-semibold">{product.price}</h3>
                        <button className="px-3 py-2 bg-red-600 rounded-lg text-white font-bold hover:bg-black" onClick={() => addcart(product)}>
                            Add Cart
                        </button>
                        </div>
                    </div>))}
             </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
