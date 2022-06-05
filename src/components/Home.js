import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Nitish Chaudhary</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a full stack developer</h2>
        <div>
            <button>
                View Work <HiArrowNarrowRight />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
