import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className="pb-[50px] sm:pb-0 w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold tracking-wider">
            <p>Hi I'm Nitish nice to meet you.</p>
          </div>
          <div>
            <p className="text-lg tracking-wide">
              I am a Final year CSE student working as an Intern in a Noida
              based startup. I've been fortunate enough to get exposed to
              multiple technologies and have worked on them. My major stack of
              working is <b>Django</b> for the backend and{" "}
              <b>HTML, CSS, and JAVASCRIPT</b> to design the frontend of the
              website. Currently I am learning <b>React</b> to improve my front
              end develpment skills. Ive worked on multiple web applications and
              deployed some of them.I've also worked on <b>Docker</b> to deploy one of my application. You will find them in the {" "}
              <Link to="projects" smooth={true} duration={500}>
                <span className="text-pink-600 hover:cursor-pointer font-medium tracking-wide">Projects</span>
              </Link>{" "}
              section of this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
