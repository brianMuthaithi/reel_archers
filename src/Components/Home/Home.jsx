import React from "react";
import { lazy, Suspense } from "react";

const About = lazy(() => import("../About/About"));
const Contact = lazy(() => import("../Contacts/Contact"));
const Hero = lazy(() => import("../Hero/Hero"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <Hero />
        <About />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
