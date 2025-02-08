import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { Categories, sale, shop } from "../Utility/data";
import { add } from "../Redux/cartSlice";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <Navbar />
      <div className="lg:mx-10 p-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-20 ">
          <div className="lg:py-40 space-y-4">
            <h1 className="text-6xl font-bold">Shop Page</h1>
            <h3 className="text-xl font-semibold">
              A Shop Page is an eCommerce section where users browse, filter,
              and purchase products. It includes product listings, search,
              filters, and an "Add to Cart" option for seamless shopping.
            </h3>
            <button className="px-3 py-2 bg-red-600 rounded-lg text-white font-bold text-xl hover:bg-black ">
              Shop Now
            </button>
          </div>
          <div className="border shadow-lg lg:mt-20 mt-0 rounded-2xl">
            <img
              src="/Assets/head6.avif"
              alt="headphone"
              className="lg:w-[40rem] rounded-2xl "
            ></img>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center  lg:gap-48 lg:mt-20">
          <div className="py-28">
            <div className="">
              <h1 className="text-3xl md:text-6xl lg:text-4xl font-bold">
                Product Categories :
              </h1>
              <div className="mt-4">
                <Link to="/joysticks">
                  <h2 className="text-xl md:text-4xl font-semibold">
                    <li>Joysticks</li>
                  </h2>
                </Link>

                <Link to="/smartwatchs">
                  <h2 className="text-xl md:text-4xl font-semibold mt-2">
                    <li>Smart Watches</li>
                  </h2>
                </Link>

                <Link to="/headphones">
                  <h2 className="text-xl md:text-4xl font-semibold mt-2">
                    <li>Headphones</li>
                  </h2>
                </Link>

                <Link to="/audiospeakers">
                  <h2 className="text-xl md:text-4xl font-semibold mt-2">
                    <li>Audio Speakers</li>
                  </h2>
                </Link>

                <Link to="/virtualrealitys">
                  <h2 className="text-xl md:text-4xl font-semibold mt-2">
                    <li>Virtual Reality</li>
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap gap-10  md:mt-10">
              {Categories.map((product) => (
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
                    <h3 className="text-xl font-semibold ">
                      {product.price} USD
                    </h3>
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
        </div>

        <div>
          <div className="flex flex-wrap  justify-center gap-20 mt-20  ">
            {shop.map((product) => (
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
                  <h3 className="text-xl font-semibold ">
                    {product.price} USD
                  </h3>
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

        <div>
          <div className="text-center mt-20 text-5xl font-bold">
            <h1>Recently Most Sales Product</h1>
          </div>
          <div>
            <div className="flex flex-wrap  justify-center gap-20 mt-20  ">
              {sale.map((product) => (
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
                    <h3 className="text-xl font-semibold ">
                      {product.price} USD
                    </h3>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
