import React from "react";
import { Link } from "react-router-dom";

function Footpro() {

  const ScrollToTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
      <div>
        <div>
          <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-8 lg:gap-20  font-semibold mt-4  ">
            <Link to="/joysticks">
              <li onClick={ScrollToTop}>Joysticks</li>
            </Link>
            <Link to="/smartwatchs">
              <li onClick={ScrollToTop}>Smartwatches</li>
            </Link>
            <Link to="/headphones">
              <li onClick={ScrollToTop}>Headphones</li>
            </Link>

            <Link to="/audiospeakers">
              <li onClick={ScrollToTop}>Audiospeakers</li>
            </Link>

            <Link to="/virtualrealitys">
              <li onClick={ScrollToTop}>Virtualrealitys</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footpro;
