import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";
import { clearCart } from "../Redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const removecart = (id) => {
    dispatch(remove(id));
  };

  const productcart = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
        <div className="flex items-center justify-center gap-20 mt-10">
          <div>
            <button
              className={`px-3 py-2 font-bold rounded ${
                productcart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
              onClick={handleClearCart}
              disabled={productcart.length === 0}
            >
              Clear
            </button>
          </div>
          <div>
            <button
              className={`px-3 py-2 font-bold rounded ${
                productcart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
              disabled={productcart.length === 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
