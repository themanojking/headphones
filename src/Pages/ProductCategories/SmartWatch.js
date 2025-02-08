import React from "react";
import Title from "../../Components/Tittle";
import Navbar from "../../Components/Navbar";
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import {  smartwatchs } from "../../Utility/data";


function SmartWatch() {

    const dispatch = useDispatch();

    const addcart = (product) => {
      dispatch(add(product));
    };

  return (
    <>
      <Navbar />
      <div className="text-center py-28">
        <Title title="Smart Watches" subtitle="Product Categories -> SmartWatches" />
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-10  md:mt-10">
          {smartwatchs.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg  w-80  "
            >
              <img
                src={product.img}
                alt={product.alt}
                className="rounded-t-xl"
              ></img>
              <div className="px-3 p-3">
                <h1 className="text-3xl font-bold">{product.tittle}</h1>
                <h3 className="text-xl font-semibold ">{product.price} USD</h3>
                <div className="flex justify-end">
                  <button
                    className="px-3 py-2 bg-red-500 text-white font-semibold rounded-lg"
                    onClick={() => addcart(product)}
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SmartWatch;
