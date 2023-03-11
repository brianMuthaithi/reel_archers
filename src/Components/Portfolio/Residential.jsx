import React, { useState, useEffect } from "react";
import { residentials } from "./PortfolioData";

const Residentials = () => {
  const [sliceNum, setSliceNum] = useState(5);
  const [initialData, setInitialData] = useState([]);

  const setSliceNumFunc = (data) => {
    if (sliceNum === 5) {
      setSliceNum(data.length);
    } else {
      setSliceNum(5);
    }
  };

  useEffect(() => {
    setInitialData(residentials.slice(0, sliceNum));
  }, [sliceNum]);

  return (
    <div>
      <h2 className="font-semibold md:text-2xl xl:text-3xl">2. Residential Projects</h2>
      <p className="md:text-lg xl:w-3/4 my-3">
        Designing with your ideas helps us bring your dream to life and add
        comfot. We develop the ideas that fit your lifestyle while working with
        your financial range to achieve a well balanced project.
        Reel Archer Studios seeks to understand how we can enhance our clients
        design needs and provide our team with clear direction on how to produce
        fine quality projects
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {initialData.map((item, i) => (
            <img
              src={item.image}
              alt=""
              className={`w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full ${
                initialData.length !== 5
                  ? `last:col-span-2 md:last:col-span-2 xl:last:col-span-2`
                  : `md:last:col-span-2 lg:last:col-span-1`
              }`}
            />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => setSliceNumFunc(residentials)}
          className="bg-navColor py-2 px-5 rounded-full font-bold text-white md:text-xl hover:bg-transparent hover:border hover:border-navColor hover:text-navColor duration-700"
        >
          {`${initialData.length === 5 ? `See More` : `See Less`}`}
        </button>
      </div>
    </div>
  );
};

export default Residentials;