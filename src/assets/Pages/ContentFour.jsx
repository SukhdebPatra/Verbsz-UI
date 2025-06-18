import { ArrowRight } from "lucide-react";

import "./Home.css";
const ContentFour = () => {
  return (
    <>
      <div className="container  mb-[11%]">
        <div className="relative h-80">
          <div className="absolute top-0  left-[10%] w-[90%] h-full bg-[#FAF9FE] rounded-3xl z-0"></div>

          <div className="relative z-10 p-6">
            <div className="flex flex-row items-start gap-6 mt-3">
              <div className="col-3 text-4xl font-semibold text-[#0B325F] right-[10%]">
                <span className="relative left-[10%]">
                  {" "}
                  We Can <br /> Help With
                </span>
              </div>
              <div className="col-6">
                <p>
                  Before sinking tons of money into product development, find
                  out what matters most to your audience. Learn the ins and outs
                  of their preferences and cater your product to meet those
                  needs.
                </p>
              </div>
              <div className="col-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-3 px-6 rounded-full shadow-md transition-all duration-300 ">
                  Put Us To Work
                </button>
              </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
              <div className="col-3 flex flex-col "></div>
              <div
                className="col-2 flex flex-col group relative hover:bg-[#001831] hover:shadow-lg
  transform transition-transform duration-300 hover:scale-105 hover:text-white rounded-xl p-4 max-h-[300px]"
              >
                <img
                  src="src/assets/imges/Group 32.svg"
                  alt="Identifying Target Audiences"
                  className="w-10 h-10 mb-2"
                />

                <p className="text-sm font-bold mb-1">
                  Identifying <br /> Target Audiences
                </p>

                <p
                  className="
      text-gray-300 text-xs leading-snug
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300 
      overflow-hidden
    "
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>

                <div
                  className="
      self-end mt-2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
                >
                  <button className="p-2 w-10 h-10 bg-white text-blue-900 rounded-full shadow-md flex items-center justify-center">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div
                className="col-2 flex flex-col group relative hover:bg-[#001831] hover:shadow-lg
  transform transition-transform duration-300 hover:scale-105 hover:text-white rounded-2xl p-4 max-h-[300px]"
              >
                <img
                  src="src/assets/imges/Group 15.svg"
                  alt="Generating Conversions"
                  className="w-10 h-10 mb-2"
                />

                <p className="text-sm font-bold mb-1">
                  Generating <br /> Conversions
                </p>

                <p
                  className="
      text-gray-300 text-xs leading-snug
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300 
      overflow-hidden
    "
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>

                <div
                  className="
      self-end mt-2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
                >
                  <button className="p-2 w-10 h-10 bg-white text-blue-900 rounded-full shadow-md flex items-center justify-center">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div
                className="col-2 flex flex-col group relative hover:bg-[#001831] hover:shadow-lg
  transform transition-transform duration-300 hover:scale-105 hover:text-white rounded-2xl p-4 max-h-[300px]"
              >
                <img
                  src="src/assets/imges/Group 30.svg"
                  alt="Optimizing Product Features"
                  className="w-10 h-10 mb-2"
                />

                <p className="text-xs font-bold mb-1 leading-tight">
                  Optimizing <br />
                  Product Features
                </p>

                <p
                  className="
    text-gray-300 text-xs leading-snug
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300 
    overflow-hidden
  "
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>

                <div
                  className="
    self-end mt-2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
  "
                >
                  <button className="p-2 w-10 h-10 bg-white text-blue-900 rounded-full shadow-md flex items-center justify-center">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div
                className="col-2 flex flex-col group relative hover:bg-[#001831] hover:shadow-lg
  transform transition-transform duration-300 hover:scale-105 hover:text-white rounded-2xl p-4 max-h-[300px]"
              >
                <img
                  src="src/assets/imges/Group 17.svg"
                  alt="Optimizing Product Features"
                  className="w-10 h-10 mb-2"
                />

                <p className="text-xs font-bold mb-1 leading-tight">
                  Analyzing <br /> Profitability
                </p>

                <p
                  className="
    text-gray-300 text-xs leading-snug
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300 
    overflow-hidden
  "
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>

                <div
                  className="
    self-end mt-2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
  "
                >
                  <button className="p-2 w-10 h-10 bg-white text-blue-900 rounded-full shadow-md flex items-center justify-center">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFour;
