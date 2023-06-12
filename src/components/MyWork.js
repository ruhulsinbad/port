import React from "react";
import WorkCard from "./WorkCard";

import work from "../json/work.json";
const MyWork = () => {
  return (
    <div className=" page lg:px-40 lg:grid lg:grid-cols-12 lg:w-screen lg:h-screen lg:items-center">
      <div className=" flex flex-col justify-center items-center w-screen h-screen lg:inline lg:w-auto lg:h-auto lg:place-items-start col-span-12 lg:col-span-4 px-6">
        <h1 className=" text-6xl font-ubuntu uppercase text-yellow-500">
          My Work
        </h1>
        <p className=" text-xl text-white font-ubuntu mt-12">
          Check it out some of my projects that I delivered to my clients. I
          appeciate your valuable times.
        </p>
        <button className="mt-8 relative inline-block px-4 py-2 font-medium text-yellow-500 border-2 border-yellow-500 rounded-md overflow-hidden transition-all duration-500">
          <span className="absolute inset-y-0 left-0 w-0 bg-blue-500 transform origin-left transition-all duration-1000 hover:w-full" />
          <span className="relative font-lato z-10">Learn more</span>
        </button>
      </div>
      <div className=" flex flex-col lg:flex-row lg:h-auto lg:w-auto  lg:flex-wrap lg:justify-between lg:items-center lg:gap-8 col-span-12 lg:col-span-8">
        {work.companies.map((company) => {
          return (
            <WorkCard
              name={company.name}
              type={company.type}
              image={company.src}
              alt={company.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
