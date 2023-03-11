import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../Assets/Us/logo.png";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState("#");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        return setSticky("sticky");
      } else {
        return setSticky("#");
      }
    });
  }

  const setNavBar = () => {
    setActive(!active);
  };

  const hideNavBar = () => {
    setActive(!active);
  };

  const navData = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Services" },
    { name: "Portfolio" },
    { name: "Contact Us" },
  ];

  return (
    <nav
      className={`py-0 md:px-2 z-50 ${
        sticky === "sticky" ? `fixed w-full top-0 bg-stickyNav` : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center max-w-5xl mx-auto xl:max-w-7xl">
        <Link
          to="/"
          className="flex flex-row items-center h-24 z-50 -ml-12 md:ml-0"
        >
          <img src={logo} alt="" className="w-full h-full object-cover" />
          <p className="-ml-14 text-white text-base font-black italic md:text-lg">
            ReelArcher
          </p>
        </Link>
        <div
          className={`flex flex-col absolute bg-cyan-900 top-0 duration-300 ${
            active ? `-left-[0%]` : `-left-[100%]`
          } h-screen w-full items-start pl-[25%] justify-center space-y-5 md:left-0 md:items-center md:pl-0 md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent  md:space-x-10 md:relative md:flex-row md:top-0 md:w-max`}
        >
          
          {/* {diable nav for mobile navBar} */}
          <div className="text-white block absolute text-2xl font-black top-10 right-10 md:hidden">
            <RxCross1 onClick={() => hideNavBar()} />
          </div>
          {navData.map((link, i) => (
            <Link
              onClick={() => hideNavBar()}
              to={link.name === "Home" ? `/` : `/${link.name.toLowerCase()}`}
              key={i}
              className="font-semibold text-xl text-white md:text-lg"
            >
              {`${link.name === "Sign In" ? link.name : link.name}`}
            </Link>
          ))}
        </div>

        {/* {buttons for mobile navBar} */}
        <div className="flex flex-row items-center space-x-3 text-white md:hidden">
          <AiOutlineMenu className="text-2xl" onClick={() => setNavBar()} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
