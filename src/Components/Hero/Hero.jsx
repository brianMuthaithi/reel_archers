import React from "react";
import { Link } from "react-router-dom";
import letter from "../../Assets/Us/letter.png";
import Nav from "./Nav";
import { projects } from "../About/AboutData";
import Courasel from '../Courasel/Courasel'

const Hero = () => {
  const memoizedProjects = React.useMemo(() => projects, []);

  return (
    <section
      className="hero h-max pb-10 md:pb-0 lg:h-[110vh] flex flex-col relative bg-gray-700"
      id="home"
    >
      {/* nav */}
      <Nav />

      {/* hero */}

      <div
        className="h-full flex xl:px-0 md:px-5 md:mt-5"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="overflow-hidden relative flex flex-col h-full justify-center mx-auto max-w-5xl md:overflow-visible xl:max-w-7xl">
          <div className="flex flex-row items-center justify-center">
            <img src={letter} alt="" className="h-20 w-20 md:h-40 md:w-40" />
            <h2 className="text-white font-semibold text-3xl -m-6 md:-ml-10 md:text-5xl">
              eel Archer Studios
            </h2>
          </div>
          <div className="flex flex-col-reverse  justify-center h-max md:flex-row md:space-x-10">
            <div className="mt-3 text-center flex flex-col px-2 space-y-10  md:px-0 md:mt-0">
              <h2 className="text-white text-2xl font-bold mx-auto md:w-3/4 xl:text-4xl">
                Delivering High Quality, Effective And Inspiring Built Space To
                Appeal And Preserve The Best In Architecture...
              </h2>
              <p className="text-white text-base my-4 mx-auto md:w-3/4 lg:text-base xl:text-xl">
                At Reel Archer Studios, we believe that great architecture has
                the power to transform lives and communities. We are dedicated
                to creating spaces that are not only functional and beautiful,
                but also promote well-being and a sense of belonging.
              </p>
              <Link
                to="contact us"
                className="hover:bg-white  border w-max mx-auto rounded-3xl py-2 px-6 text-base xl:text-lg hover:text-navColor font-bold bg-transparent text-white duration-500"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="block lg:hidden  w-[75%] mx-auto">
          <Courasel>
            {memoizedProjects.map((project, i) => (
              <Link key={i} className="min-w-[100%] relative h-40 min-h-40">
                <img
                  src={project.image}
                  alt=""
                  className="h-40 min-h-40 w-[90%] mx-auto object-cover rounded-xl"
                />
                <p className="absolute  top-[50%] w-full text-center text-white text-[16px] font-semibold">
                  {project.name}
                </p>
              </Link>
            ))}
          </Courasel>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
