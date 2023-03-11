import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import Commercial from "./Commercial";
import Residentials from "./Residential";
import Swimming from "./Swimming";
import Stations from "./Petrol";
import Cultural from "./Cultural";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const components = [
    { name: Commercial },
    { name: Residentials },
    { name: Swimming },
    { name: Stations },
    { name: Cultural },
  ];
  return (
    <section>
      <div className="bg-navColor">
        <Nav />
      </div>
      <div className="mt-10 mx-auto max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          Welcome To Our <span className="text-cyan-800">Portfolio</span>
        </h2>
        <div className="mt-10 space-y-16 xl:space-y-32">
          {components.map((component, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <component.name />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
