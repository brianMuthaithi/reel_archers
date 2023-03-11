import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from '../../Assets/Us/difference.png'
import Choices from "./Choices";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        className="mx-auto max-w-5xl px-2 py-10 md:py-16 xl:mt-32 xl:max-w-7xl xl:px-0"
      >
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          How We Make the <span className="text-cyan-800">Difference</span>
        </h2>
        <div className="flex flex-col gap-5 mt-5 md:mt-16 md:space-x-5 md:flex-row">
          <div className="h-64 md:h-96 md:w-1/2">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-96 md:w-1/2">
            <h2 className="text-gray-800 text-lg font-semibold mb-3">
              We're innovators and quick problem-solvers committed to providing our
              customers with exceptional services.
            </h2>
            <p className="text-gray-700 xl:text-lg">
              We are a leading architecture firm that has been creating innovative
              and sustainable designs. We specialize in specific architecture
              field such as residential, commercial, industrial. <br></br>
              <br></br>Our team of experienced architects and designers are dedicated
              to creating beautiful, functional and sustainable structures that
              meet the needs of our clients.
            </p>
            <button className="bg-[#244886] py-2 px-5 rounded-full font-bold text-white mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700">
              <Link to="/about Us">More About Us</Link>
            </button>
          </div>
        </div>

      </div>
      <div
        className="element"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        <Choices />
      </div>
    </section>
  );
};

export default About;
