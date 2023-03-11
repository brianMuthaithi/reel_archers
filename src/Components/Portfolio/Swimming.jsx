import React from "react";
import { swimming } from "./PortfolioData";

const Swimming = () => {
  return (
    <div>
      <h2 className="font-semibold md:text-2xl xl:text-3xl">3. Luxury Swimming Pools</h2>
      <p className="md:text-lg xl:w-3/4 my-3">
        Developing a luxury pool design is a type of dedicated art. You must
        have noticed that some pools are so creative. It is because property
        owners and designers have discussed all the key points. With the help of
        Reel Archer Studios, you can get a new asset. When a swimming pool fits
        seamlessly in the property, the surrounding architecture gets a
        compliment. Expert-level craftmanship is required to get an enticing
        luxury pool design.
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {swimming.map((item, i) => (
          <img
            src={item.image}
            alt=""
            key={i}
            className={`swim w-full rounded h-52 object-cover first:col-span-2 md:h-64 first:row-span-2 first:h-64 md:first:h-full last:col-span-2 md:last:col-span-1 xl:last:col-span-2`}
          />
        ))}
      </div>
    </div>
  );
};

export default Swimming;
