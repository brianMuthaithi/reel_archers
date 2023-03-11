import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../Hero/Nav";
import image from "../../Assets/Services/house.jpg";
import { values, teams } from "./AboutData";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDeep = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="bg-navColor">
        <Nav />
      </div>
      <div className="mx-auto mt-10 px-2 max-w-5xl lg:px-2 xl:max-w-7xl">
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          About Reel <span className="text-cyan-800">Archer Studios</span>
        </h2>
        <div
          className="flex flex-col-reverse gap-5 mt-10 lg:flex-row"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <div className="lg:w-1/2">
            <p className="text-gray-700 xl:text-lg">
              The highest quality design of any of our architecture projects is
              our first priority. Our passion for quality drives us to create
              innovative, unique, and more functional spaces which change the
              environment we live in.
              <br />
              <br />
              We are proud of our professional teams committed to meeting
              individual clients' needs, requirements, and budgets. We strive to
              break down the boundaries of standards and use innovative and
              complex design opportunities, which means that good designs equals good
              business.
            </p>
            <button className="bg-[#244886] py-2 px-5 rounded-full font-bold text-white mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700">
              <Link to="/services">Try Our Services</Link>
            </button>
          </div>
          <img
            src={image}
            alt=""
            className="rounded-lg w-full object-cover h-96 lg:w-1/2 xl:h-96"
          />
        </div>
        <div
          className="flex flex-col gap-10 mt-20 text-gray-700 mx-auto md:flex-row lg:w-[90%]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          {values.map((value, i) => (
            <div
              className="flex flex-col text-center bg-white p-5 rounded-xl md:w-1/2 hover:scale-95 duration-700"
              key={i}
            >
              <img
                src={value.image}
                alt=""
                className="h-40 w-40 mx-auto object-contain"
              />
              <h2 className="text-navColor text-lg font-semibold">
                {value.name}
              </h2>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-24 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
            Meet Our <span className="text-cyan-800">Team</span>
          </h2>
          <p className="mt-5 text-center mx-auto md:w-[80%] xl:text-lg">
            It is our team who genuinely set us apart. Their determination to
            deliver excellent work, capacity for creativity and problem solving,
            and unrelenting commitment to improving the communities we serve
            makes Reel Archer Studios one of the fastest growing architecture
            company in Kenya.
          </p>
          <div className="flex flex-col gap-5 mt-10 md:flex-row">
            {teams.map((team, i) => (
              <div
                key={i}
                className="bg-white p-5 text-center space-y-2 rounded-xl md:w-1/3 hover:shadow-2xl duration-700"
              >
                <img
                  src={team.image}
                  alt=""
                  className="h-24 w-24 mx-auto object-cover rounded-full"
                />
                <h2 className="text-xl font-semibold text-navColor">
                  {team.name}
                </h2>
                <h2 className="text-lg font-semibold">{team.role}</h2>
                <p>{team.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 text-white">
          <div className="bg-navColor flex flex-row justify-between items-center rounded-xl p-5">
            <div>
              <h2 className="text-xl font-semibold xl:text-2xl">
                Want to Work with Us?
              </h2>
              <p className="text-lg">
                Our team of architects is ready to work on your project!
              </p>
            </div>
            <div>
              <button className="bg-white py-2 px-5 rounded-full font-bold text-navColor md:text-xl hover:bg-transparent hover:border hover:border-white hover:text-white duration-700">
                <Link to="/contact us">Start a Project</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeep;
