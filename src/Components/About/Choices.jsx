import { Link } from "react-router-dom";
import { data } from "./AboutData";

const Choices = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 py-10 mt-5 xl:mt-20 xl:max-w-7xl xl:px-0">
      <div className="flex flex-col items-center justicy-center">
        <h2 className="title text-gray-800 text-4xl font-bold text-center xl:text-5xl">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 px-5 gap-5 mt-5 md:px-0 md:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((option, i) => (
            <div
              key={i}
              className="card text-center space-y-3 p-2 rounded-xl cursor-pointer bg-gray-200 duration-500"
            >
              <img
                src={option.image}
                alt=""
                className="h-20 w-20 mx-auto rounded-full object-cover"
              />
              <h2 className="text-textColor font-semibold text-lg xl:text-xl">
                {data.indexOf(option) + 1}.{option.title}
              </h2>
              <p className="text-gray-700 lg:text-sm xl:text-lg">{option.text}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#244886] py-2 px-5 rounded-full font-bold text-white mt-5 md:mt-10 md:text-xl">
          <Link to="/contact us">Start a Project</Link>
        </button>
      </div>
    </div>
  );
};

export default Choices;
