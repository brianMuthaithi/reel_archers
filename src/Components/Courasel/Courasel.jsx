import React, { useState, useEffect } from "react";

const Courasel = ({ children }) => {
  const [currentIndex, setIndex] = useState(0);

  const setCurrentIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const reactChildren = React.Children.toArray(children);

  return (
    <div className="md:px-10 mt-10">
      <div
        onMouseEnter={() => setPaused(!paused)}
        onMouseLeave={() => setPaused(!paused)}
        className={`flex flex-row duration-700 md:space-x-3`}
        style={{ transform: `translate(-${currentIndex * 100}%)`}}
      >
        {React.Children.map(children, (child, index) => {
           return React.cloneElement(child, index === currentIndex ? {transform:"scale(0.5)"} : {transform:"scale(1)"});
        })}
      </div>
      <div className="hidden flex-row items-center justify-center space-x-4 mt-5">
        {reactChildren.map((child, i) => (
          <p
            onClick={() => setCurrentIndex(reactChildren.indexOf(child))}
            className={`cursor-pointer py-1.5 rounded-full duration-1000 ${
              reactChildren.indexOf(child) === currentIndex
                ? `bg-navColor px-3`
                : `bg-white px-1.5`
            }`}
            key={i}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Courasel;
