import React from "react";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20 mt-10 ">
          <div className="space-y-5">
            <h1 className="text-6xl font-bold">Our Story</h1>
            <h2 className="text-lg md:text-xl font-semibold md:ml-5">
              Where Technology Meets Passion
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
              At Our Story, we believe that technology has the power to create
              meaningful experiences. We're a passionate team of electronics who
              are dedicated to providing high-quality products that enhance your
              everyday life.
            </h3>
            <h3 className="text-xl md:text-2xl font-semibold">
              Our journey began with a shared vision to bridge the gap between
              cutting-edge technology. With this vision in mind, we embarked on
              a mission to redefine the way people interact with technology.
            </h3>
          </div>
          <div>
            <img
              src="/Assets/head7.avif"
              alt="work"
              className="lg:w-[70rem]"
            ></img>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:gap-56 mt-20">
          <div>
            <img
              src="/Assets/head8.avif"
              alt="whoweare"
              className="lg:w-[100rem] lg:py-16"
            ></img>
          </div>
          <div className="space-y-5 py-20">
            <h1 className="text-4xl md:text-6xl font-bold">Who We Are ?</h1>
            <h2 className="text-lg md:text-xl font-semibold md:ml-5">
              Electronics Innovators
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
              At Our Story, we are a team of passionate innovators in the world
              of electronics. With a shared love for technology and a drive to
              create exceptional products, we strive to make a positive impact
              on the way people live and interact with the world around them.
            </h3>
            <h3 className="text-xl md:text-2xl font-semibold">
              Our team consists of dedicated engineers, designers, and
              technologists who bring their expertise and creativity to every
              project. We're united by a common goal: to push the boundaries of
              what is possible and deliver cutting-edge electronics that exceed
              expectations.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
