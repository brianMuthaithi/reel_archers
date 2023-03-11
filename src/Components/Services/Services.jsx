import React, { useEffect } from "react";
import Nav from "../Hero/Nav";
import image from "../../Assets/Services/design.jpg";
import image2 from "../../Assets/Services/house.jpg";
import icon from "../../Assets/Services/1.svg";
import { services, profiles } from "./ServicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const workAreas = [
    { name: "Technology" },
    { name: "Health Care" },
    { name: "Work Place" },
    { name: "Science" },
  ];

  return (
    <section>
      <div className="bg-navColor">
        <Nav />
      </div>
      <div className="px-2 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0">
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          Introducing Our <span className="text-cyan-800">Services</span>
        </h2>
        <p
        data-aos = "fade-up" 
        data-aos-easing = "ease-in-out"
        data-aos-delay = "100"
        
        className="mb-10 mt-5 text-center text-xl">
          We are dedicated to creating spaces which meet clients' needs,
          requirements, and expectations.
        </p>
        <div 
        data-aos = "fade-up" 
        data-aos-easing = "ease-in-out"
        data-aos-delay = "100"

        className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div className="space-y-2 hover:scale-105 duration-700" key={i}>
              <img
                src={service.image}
                alt=""
                className="rounded-t-lg h-42 w-full object-cover"
              />
              <h2 className="text-navColor text-xl font-semibold">
                {service.name}
              </h2>
              <p>{service.text}</p>
              <a
                href="/contact us"
                className="text-navColor text-lg hover:underline duration-700"
              >
                Get in touch &rarr;
              </a>
            </div>
          ))}
        </div>
        <div
          className="my-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
            Our <span className="text-cyan-800">Design</span> Process
          </h2>
          <div className="mt-10 flex flex-col gap-5 lg:flex-row">
            <img
              src={image}
              alt=""
              className="h-64 object-cover rounded-lg md:h-96 lg:w-1/2 xl:h-[450px]"
            />
            <div>
              <p>
                <span className="font-semibold xl:text-lg">
                  Let us tell you about the process of developing a new project.
                </span>
                <br />
                <br />
                Our design process is the same for every client regardless of
                where you live. We have crafted our process such that all of our
                designs maximize the potential of your space. It all starts with
                an initial consultation with our managers, after you contact us
                in any other way. During the meeting, we discuss your project
                and listen to your needs, requirements and budget.
                <br />
                <br /> Your work relates to spatial concepts, form and
                structure. After the meeting, we send you a design proposal
                based on your new project. During our design reveal, we talk
                about any revisions you would like us to make to the design. This ensures that alterations are
                compatible with the owner's vision for the project. Once we
                agree on every detail, you make a deposit and the project starts.
              </p>
{/*}              <button className="bg-[#244886] w-max py-2 px-5 rounded-full font-bold text-white mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700">
               <Link to="contact us">Start a Project</Link>
          </button> */}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <div className="lg:rounded-l-xl flex flex-col-reverse lg:flex-row">
            <div className="bg-gray-200 p-5 space-y-1 flex flex-col justify-center lg:space-y-5 lg:w-1/2">
              <h2 className="title text-gray-800 text-4xl font-bold md:text-5xl">
                Practice <span className="text-cyan-800">Areas</span>
              </h2>
              <h2 className="font-semibold text-lg">
                As an architecture company with vast experience, we work with
                different areas of businesses.
              </h2>
              <p>
                Our team prides itself in creating unique, innovative spaces
                and in dealing with projects of any complexity. We understand
                that each project is different and deserves to be properly
                handled.
              </p>
              <div className="grid grid-cols-2 md:flex md:flex-row justify-around">
                {workAreas.map((area, i) => (
                  <div className="flex flex-row gap-2 items-center" key={i}>
                    <img src={icon} alt="" className="h-6" />
                    <p key={i} className="font-semibold xl:text-lg">
                      {area.name}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                We design both private property and commercial
                buildings with attention to every detail and special care. Our
                experts thoroughly develop designs and supervise the
                construction process from the beginning to the end.
              </p>
              <button className="bg-[#244886] w-max py-2 px-5 rounded-full font-bold text-white mt-5 md:mt-10 md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700">
                <Link to="/portfolio">See Our Projects</Link>
              </button>
            </div>
            <img
              src={image2}
              alt=""
              className="h-[300px] lg:rounded-tr-lg lg:h-[600px] object-cover lg:w-1/2"
            />
          </div>
        </div>
      </div>
      <div
        className="services pb-32 md:pb-0"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="mx-auto py-16 px-2 max-w-4xl xl:max-w-7xl xl:px-0">
          <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
            Our <span className="text-white">Profile</span>
          </h2>
          <p className="text-white text-lg font-semibold text-center">
            We follow the principles that have been developed over the years of
            our work.
          </p>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-5 text-center text-white xl:w-3/4 md:grid-cols-2">
            {profiles.map((profile, i) => (
              <div
                key={i}
                className="p-5 space-y-3 border rounded-xl hover:scale-95 duration-700"
              >
                <div className="h-10 w-10 p-2 flex flex-col items-center justify-center font-bold bg-white rounded-full mx-auto text-navColor">
                  {<profile.icon className="h-full w-full" />}
                </div>
                <h2 className="text-xl font-semibold">{profile.name}</h2>
                <p>{profile.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
