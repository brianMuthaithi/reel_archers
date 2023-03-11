import React from "react";
import { cultural } from "./PortfolioData";

const Cultural = () => {
  return (
    <div>
      <h2 className="font-semibold md:text-2xl xl:text-3xl">
        5. Cultural Architecture
      </h2>
      <p className="xl:text-lg xl:w-3/4 my-3">
        Africa is rising, from a slow economic downturn to a possible intimation
        in coming years and what a better way to express that than through
        architecture? These projects intends to develop an architectonic
        solution of quality and functionality which concilitates the concept or
        traditionl image. <br />
        <br />
        Our design concept of th{" "}
        <span className="font-semibold">African Cultural Center</span> is based
        on African storytelling where individuals especially young people and
        children would gather around a fireplace at night under the light of
        moon. The uniqueness of African storytelling is enshrined in its
        distinctive ability to interprete the universe, satisfy curiosities of
        the African people and to teach and impact important moral lessons about
        everyday life. <br />
        <br />
        Its pattern based Architecture is constructed entirely of mud brick.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {cultural.map((item, i) => (
          <img
            src={item.image}
            alt=""
            key={i}
            className={`w-full rounded h-52 object-cover first:col-span-2 md:h-[246px] md:last:col-span-3 lg:h-60 xl:h-72 
            first:row-span-2 first:h-64 md:first:h-fit xl:last:h-[340px] last:col-span-2 lg:last:col-span-2 last:row-span-2 xl:last:col-span-2`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cultural;
