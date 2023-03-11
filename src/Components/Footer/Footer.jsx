import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  const links = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Portfolio" },
    { name: "Services" },
  ];

  const services = [
    { name: "Architecture" },
    { name: "Master Planning" },
    { name: "Consultations" },
    { name: "Interiors" },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="footer px-2 pt-0 text-gray-700 lg:pt-10 xl:px-0">
      <div className="space-y-10 mx-auto max-w-5xl xl:max-w-7xl">
        <div className="flex flex-col space-y-10 justify-between md:flex-row md:space-y-0">
          <div className="space-y-3 mt-10 md:mt-0">
            <h2 className="font-semibold text-lg xl:text-2xl">
              Contact Information
            </h2>
            <p>
              <span className="font-semibold">Address: <br/></span>P.O. BOX
              3407-00100, Nairobi
            </p>
            <div>
              <a href="tel:+254 701123511">
                <span className="font-semibold">Phone: <br /></span> +254 701123511
              </a>
              <a href="mailto:info@reelarcherstudios.com" className="block">
                <span className="font-semibold">Email:</span> info@reelarcherstudios.com
              </a>
            </div>
            <div className="flex flex-row space-x-3 text-3xl">
              <a href="https://www.facebook.com/bryan.ogutu.7">
                <AiFillFacebook />
              </a>
              <a href="https://www.instagram.com/reel_archer.studios">
                <AiFillInstagram />
              </a>
              <a href="https://twitter.com/reel_archer">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between md:justify-around md:w-1/2 xl:space-x-48">
            <div>
              <h2 className="font-semibold text-lg xl:text-2xl">
                Useful Links
              </h2>
              <div className="flex flex-col font-semibold space-y-1">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    to={
                      link.name === "Home"
                        ? "/"
                        : `/${
                            link.name.charAt(0).toLowerCase() +
                            link.name.slice(1)
                          }`
                    }
                    className="md:ml-3"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg xl:text-2xl">
                Our Services
              </h2>
              <div className="flex flex-col font-semibold space-y-1">
                {services.map((service, i) => (
                  <Link key={i} to="services" className="md:ml-3">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="order-[-1] space-y-3 md:order-none">
            <h2 className="font-semibold text-lg xl:text-2xl">
              Our Newsletter
            </h2>
            <p className="font-semibold">
              Don't miss our weekly updates and offers
            </p>
            <div className="flex flex-row rounded-full bg-white">
              <input
                type="text"
                placeholder="Email"
                className="flex-1 px-2 py-3 rounded-full outline-none"
              />
              <button className="bg-navColor px-2 rounded-full text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-3 border-t border-dashed border-gray-400">
          <p className="text-center">
            &#169;{year} Copyright reelarchers. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
