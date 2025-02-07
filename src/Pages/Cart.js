import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const removecart = (id) => {
    dispatch(remove(id));
  };

  const productcart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <div className="lg:mx-10 p-10">
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </div>
        <div className="flex flex-wrap  justify-center gap-10 mt-10">
          {productcart.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg lg:w-96 w-80  "
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
                    className="px-3 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => removecart(product.id)}
                  >
                    Remove Cart
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

export default Cart;
