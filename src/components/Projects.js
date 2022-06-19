import React from "react";
import Codescape from "../assets/codescape.png";
import ConnectU from "../assets/connectU.PNG";
import vaccineTracker from "../assets/vaccine.PNG";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] md:mt-[100px] "
    >
      <div className="pt-[100px] md:pt-[450px] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6 font-medium tracking-wide">
            // Check my recent projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <div
              style={{ backgroundImage: `url(${Codescape})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 duration-200 text-center">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  Codescape
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="http://codescape006.herokuapp.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/nitishchaudhary/codescape"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide">
                <b className="text-lg border-b-4 border-pink-600">Codescape</b>
                <p className="mt-[10px]">
                  It is a social platform for coders and programmers.Tech stack
                  used to built the application involves{" "}
                  <b>HTMl, CSS and Javascript</b> for UI and <b>Django</b> for
                  the Backend system along with <b>Postgresql</b> database.
                </p>
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${ConnectU})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  ConnectU
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/nitishchaudhary/connectU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                <b className="text-lg border-b-4 border-pink-600">ConnectU</b>
                <p className="mt-[10px]">
                  Web Application which can be used to chat in real time with
                  other users. It used <b>HTML, CSS, and Javascript</b> on front
                  end and <b>Django</b> on the backend along with{" "}
                  <b>Web Sockets</b> to implement real time fuctionality.
                </p>
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${vaccineTracker})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Vaccine Tracker
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://vaccinetracker.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/nitishchaudhary/vaccine-tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                <b className="text-lg border-b-4 border-pink-600">
                  Vaccine Tracker
                </b>
                <p className="mt-[10px]">
                  It is a Web app built using <b>Flask</b> used to track the
                  availability of covid vaccine in your area. It has been
                  converted to{" "}
                  <a
                    href="https://hub.docker.com/repository/docker/nitishchaudhary/vaccinetracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b>Docker image</b>
                  </a>{" "}
                  and pushed to docker hub.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
