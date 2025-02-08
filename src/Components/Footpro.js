import React from "react";
import { Link } from "react-router-dom";

function Footpro() {
  return (
    <>
      <div>
        <div>
          <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-8 lg:gap-20  text-xl font-semibold mt-4  ">
            <Link to="/joysticks">
              <li>Joysticks</li>
            </Link>
            <Link to="/smartwatchs">
              <li>Smartwatches</li>
            </Link>
            <Link to="/headphones">
              <li>Headphones</li>
            </Link>

            <Link to="/audiospeakers">
              <li>Audiospeakers</li>
            </Link>

            <Link to="/virtualrealitys">
              <li>Virtualrealitys</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footpro;
