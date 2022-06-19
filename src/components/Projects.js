import React from "react";
import WorkImg from "../assets/codescape.png";
import ConnectU from "../assets/connectU.PNG";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] md:mt-[100px] "
    >
      <div className="pt-[100px] md:pt-[350px] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
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
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 duration-200 text-center">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  Codescape
                </span>
                <div className="pt-8 text-center">
                  <a href="http://codescape006.herokuapp.com">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/nitishchaudhary/codescape">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide">
                This is the description of the project displayed asfdaskjdfa
                sdfasdfkjasdf asdf;lkajdsfas dfaslkdjfas df asddf;lkajdfa
                sdf;alksdjfa sdfa sdf;jasdf as;df asd;fkajsdf;ad fjadf{" "}
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${ConnectU})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Django application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                This is the description of the project displayed asfdaskjdfa
                sdfasdfkjasdf asdf;lkajdsfas dfaslkdjfas df asddf;lkajdfa
                sdf;alksdjfa sdfa sdf;jasdf as;df asd;fkajsdf;ad fjadf{" "}
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Django application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                This is the description of the project displayed asfdaskjdfa
                sdfasdfkjasdf asdf;lkajdsfas dfaslkdjfas df asddf;lkajdfa
                sdf;alksdjfa sdfa sdf;jasdf as;df asd;fkajsdf;ad fjadf{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
