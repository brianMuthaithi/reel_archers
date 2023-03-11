import React from "react";
import { stations } from "./PortfolioData";
import { useState } from "react";

const Stations = () => {
  const [sliceNum, setSliceNum] = useState(5);
  const setSliceNumFunc = (data) => {
    if (sliceNum === 5) {
      setSliceNum(data.length);
    } else {
      setSliceNum(5);
    }
  };

  const initialData = stations.slice(0, sliceNum);
  return (
    <div>
      <h2 className="font-semibold md:text-2xl xl:text-3xl">5. Modern Petroleum Stations</h2>
      <p className="xl:text-lg xl:w-3/4 my-3">
        Innovation, creativity and the awareness of the world and environment
        around us is the driving force towards the architecture of modern
        petroleum stations. It intergrates spaces of modern automobile clinic,
        chemist, ATM machines, ablution facilities and food vending stalls with
        an elaborated food court.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {initialData.map((item, i) => (
          <img
            src={item.image}
            alt=""
            key={i}
            className={`petro w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full ${
              initialData.length !== 5
                ? `last:col-span-2 md:last:col-span-2 xl:last:col-span-2`
                : `md:last:col-span-2 lg:last:col-span-1`
            }`}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => setSliceNumFunc(stations)}
          className="bg-navColor py-2 px-5 rounded-full font-bold text-white md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700"
        >
          {`${initialData.length === 5 ? `See More` : `See Less`}`}
        </button>
      </div>
    </div>
  );
};

export default Stations;
