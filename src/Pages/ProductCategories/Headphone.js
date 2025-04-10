import React from "react";
import Title from "../../Components/Tittle";
import Navbar from "../../Components/Navbar";
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { headphones } from "../../Utility/data";
import Footer from "../../Components/Footer";
import { MdVerified } from "react-icons/md";
import Starrate from "../../Components/Starrate";
import Additem from "../../Components/Additem";

function Headphone() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <Navbar />
      <div className="text-center py-28">
        <Title
          title="Head Phones"
          subtitle="Product Categories -> Headphones"
        />
      </div>

      <div>
        <div className="flex flex-wrap justify-center gap-10  md:mt-10">
          {headphones.map((product) => (
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
                <div className="flex justify-between items-center p-1">
                  <div>
                    <div className="flex items-center gap-1 text-red-600 ">
                      <MdVerified />
                      <h4 className="text-lg font-bold">{product.company}</h4>
                    </div>
                    <h3 className="text-xl font-semibold ">
                      {product.price} Rs
                    </h3>
                    <div className="mt-2">
                      <Starrate rating={4} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 p-2">
                      <div className="text-xl font-semibold">Qty :</div>
                      <div>
                        <Additem />
                      </div>
                    </div>
                  </div>
                </div>
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
      <Footer />
    </>
  );
}

export default Headphone;
