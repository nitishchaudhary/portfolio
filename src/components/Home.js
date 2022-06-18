import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-medium tracking-wider">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-wide text-[#ccd6f6]">
          Nitish Chaudhary
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] tracking-wide">
          Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] tracking-wide">
          I'm a full stack develper currently in my final year of graduation and
          working as an SE Intern at a startup.
        </p>
        <div>
          <Link to="projects" smooth={true} duaration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 duration-200 hover:border-pink-600">
              View Work
              <span className="">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
