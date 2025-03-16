import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";
import { latest, popular, top } from "../Utility/data";
import { FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCcAmazonPay } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Additem from "../Components/Additem";
import { MdVerified } from "react-icons/md";

function Home() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
  };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="lg:mx-10 p-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10  lg:py-20 mt-20">
          <div className="space-y-5 lg:py-20">
            <h1 className="text-3xl md:text-5xl lg:text-7xl  font-bold">
              Styles accessories & New Gadgets
            </h1>
            <h3 className="text-lg md:text-2xl font-semibold">
              Earphones are small, portable devices for personal audio that can
              be wired or wireless. They often include features like built-in
              microphones and noise cancellation.
            </h3>
            <button className="px-3 py-2 bg-red-600 rounded-lg text-white font-bold hover:bg-black ">
              Shop Now
            </button>
          </div>
          <div className="">
            <img
              src="/Assets/head1.png"
              alt="HeadPhone"
              className="lg:w-[120vh] py-5 "
            ></img>
          </div>
        </div>

        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-2xl mt-10 md:mt-0 font-bold">
            Top Categories In Our Shop
          </h1>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 md:gap-20 mt-10 ">
          {top.map((item) => (
            <div
              key={item.id}
              className=" w-40 space-y-5 "
              onClick={ScrollToTop}
            >
              <Link to={item.link}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="border shadow-lg"
                ></img>
                <h1 className="flex justify-center text-2xl font-bold mt-5">
                  {item.tittle}
                </h1>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between py-20 ">
          <div className="text-4xl md:text-5xl lg:text-7xl  font-bold">
            <h1>Latest Products</h1>
          </div>
          <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold py-16 ml-[7rem] md:ml-0 hover:text-red-600">
            <h1>View All Products</h1>
            <FaArrowRight />
          </div>
        </div>

        <div className="flex flex-wrap  justify-center gap-10  ">
          {latest.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg lg:w-96 w-80  "
            >
              <img
                src={product.img}
                alt={product.alt}
                className="rounded-t-xl "
              ></img>
              <div className="px-3 p-3">
                <h1 className="text-3xl font-bold">{product.tittle}</h1>
                <Additem />
                <div className="flex items-center gap-1">
                  <MdVerified />
                  <h4 className="text-lg font-semibold">{product.company}</h4>
                </div>
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

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-20">
          <div className="bg-blue-300 rounded-xl overflow-hidden">
            <div className="text-center p-10 space-y-1">
              <h1 className=" text-2xl md:text-4xl font-bold">
                Playing Joystick
              </h1>
              <h2 className="text-xl font-semibold">At $ 199.00 USD</h2>
              <h3 className="text-lg font-semibold">
                A joystick provides intuitive and precise control for gaming and
                simulations.
              </h3>
              <Link to="/joysticks">
                <div
                  className="flex items-center justify-center gap-2 text-xl font-bold hover:text-red-500"
                  onClick={ScrollToTop}
                >
                  <h3>View Product</h3>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/Assets/head2.png"
                alt=""
                className="hover:scale-110"
              ></img>
            </div>
          </div>
          <div className="bg-pink-200 rounded-xl overflow-hidden">
            <div className="text-center p-10 space-y-1">
              <h1 className="text-4xl font-bold">Smart Watch</h1>
              <h2 className="text-xl font-semibold">At $ 150.00 USD</h2>
              <h3 className="text-lg font-semibold">
                Smartwatches connect you to notifications and health tracking
                all on your wrist.
              </h3>
              <Link to="/smartwatchs">
                <div
                  className="flex items-center justify-center gap-2 text-xl font-bold hover:text-red-500 "
                  onClick={ScrollToTop}
                >
                  <h3>View Product</h3>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/Assets/head3.png"
                alt=""
                className="hover:scale-110"
              ></img>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center mt-20 lg:gap-20">
          <div className="lg:py-20 lg:ml-10 space-y-3 ">
            <h1 className="text-4xl md:text-6xl font-bold">Most Popular</h1>
            <h3 className="text-xl md:text-2xl font-semibold">
              Popular accessories blend elegant design with robust health and
              connectivity features.
            </h3>
            <button className="px-3 py-2 bg-red-600 rounded-lg text-white font-bold hover:bg-black">
              Shop Now
            </button>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-10 mt-10 md:mt-10">
            {popular.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl shadow-lg lg:w-72 w-80  "
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

        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:gap-20 py-20">
          <div className="lg:px-10 space-y-2 py-5">
            <h1 className="text-xl md:text-5xl font-bold">
              Subscribe to our email and get 25% off
            </h1>
            <h3 className="text-lg md:text-xl font-semibold">
              Subscription offers provide recurring access to products or
              services through regular payments. They often include exclusive
              perks or savings compared to one-time purchases
            </h3>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center md:gap-36">
              <div className="space-y-2 py-5">
                <label className="text-2xl font-bold">Username</label>
                <input
                  type="text"
                  placeholder="Enter Gmail"
                  className="block border-2 border-black w-60 h-8 placeholder:p-2 py-2 font-semibold text-xl "
                ></input>
              </div>
              <div className="md:mt-8">
                <button className="px-3 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-black ">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/Assets/head5.jpg"
              alt=""
              className="lg:w-[60rem] rounded-xl"
            ></img>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-16 ">
          <div className="text-center border p-5 rounded-xl shadow-lg space-y-2 md:w-80 ">
            <div className="flex justify-center">
              <TbTruckDelivery className="text-7xl font-bold text-red-600 " />
            </div>
            <h1 className="text-2xl font-bold ">Free Standard Delivery</h1>
            <h3 className="font-semibold">
              And free returns. See checkout for delivery dates.
            </h3>
          </div>
          <div className="text-center border p-5 rounded-xl shadow-lg space-y-2 md:w-80 ">
            <div className="flex justify-center">
              <FaCcAmazonPay className="text-7xl font-bold text-red-600" />
            </div>
            <h1 className="text-2xl font-bold ">Free Standard Delivery</h1>
            <h3 className="font-semibold">
              And free returns. See checkout for delivery dates.
            </h3>
          </div>
          <div className="text-center border p-5 rounded-xl shadow-lg space-y-2 md:w-80 ">
            <div className="flex justify-center">
              <Ri24HoursLine className="text-7xl font-bold text-red-600" />
            </div>
            <h1 className="text-2xl font-bold ">Free Standard Delivery</h1>
            <h3 className="font-semibold">
              And free returns. See checkout for delivery dates.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
