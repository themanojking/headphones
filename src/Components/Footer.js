import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { news } from "../Utility/data";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

function Footer() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="bg-red-200 rounded-xl mt-20 px-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-between  gap-10  py-20">
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
                <MdPhoneCallback className="text-4xl font-bold" />
                <h2 className="text-2xl lg:text-4xl font-bold">
                  +91 9344245993
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <MdMarkEmailRead className="text-4xl font-bold" />
                <h2 className="text-2xl lg:text-4xl font-bold">
                  deltainfo@gmail.com
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-4xl font-bold" />
                <h2 className="text-2xl lg:text-4xl font-bold">
                  Darasuram,kumbakonam
                </h2>
              </div>
            </div>
          </div>

          <div className="md:mr-20 lg:mr-0 mr-0 md:mt-10 lg:mt-0">
            <h1 className="text-4xl font-bold ">Menu</h1>
            <div className="">
            <Link to='/'><h2 className="text-2xl font-bold md:mt-5  mt-0">Home Page</h2></Link>
            <Link to='/shop'><h2 className="text-2xl font-bold md:mt-2  mt-0">Shop</h2></Link>
            <Link to='/about'><h2 className="text-2xl font-bold md:mt-2  mt-0">About</h2></Link>
            <Link to='/contact'><h2 className="text-2xl font-bold md:mt-2  mt-0">Contact</h2></Link>
            </div>
          </div>

          <div className="lg:mr-16 mr-0">
            <h1 className="text-4xl font-bold">Our New Product</h1>
            <div className="mt-5">
              {news.map((product) => (
                <div className="flex items-center gap-10 space-y-5">
                  <div className="mt-5">
                    <img
                      src={product.img}
                      alt=""
                      className="w-[8rem] border border-black p-2 rounded-xl"
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold">
                      {product.tittle}
                    </h1>
                    <h3 className="text-lg font-semibold">{product.price}</h3>
                    <button
                      className="px-3 py-2 bg-red-600 rounded-lg text-white font-bold hover:bg-black"
                      onClick={() => addcart(product)}
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
