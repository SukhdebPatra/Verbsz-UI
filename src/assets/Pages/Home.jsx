import ContentFive from "./ContentFive";
import ContentFour from "./ContentFour";
import ContentSeven from "./ContentSeven";
import ContentSix from "./ContentSix";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="">
        <section>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="left-content md:w-1/2 lg:w-2/4 mb-10 md:mb-0 md:pr-10">
              <div className="logo-text">Logo</div>
              <h1 className="text-header text-4xl lg:text-5xl font-extrabold text-[#0B325F] leading-tight">
                Market <br className="hidden md:block" /> Validation
              </h1>

              <p className="text-content text-gray-700 text-lg leading-relaxed">
                Market Validation is the process of presenting a concept for a
                product to its target market and learning from those prospective
                buyers whether or not the idea is worth pursuing.
              </p>
              <button className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                Put Us To Work
              </button>
            </div>

            <div className="right-content md:w-1/2 lg:w-2/4 relative justify-center items-center">
              <div className="heading-background" />
              <nav className="flex justify-center">
                <div className="hidden md:flex items-center space-x-8">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Insights
                  </a>
                  <button className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                    Put Us To Work
                  </button>
                </div>
              </nav>
              <div
                className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden "
                style={{ margin: "auto" }}
              >
                <img
                  src="/assets/imges/1.png"
                  alt="Business meeting"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="floating-content absolute  left-1/4 md:left-10 lg:left-20 bg-white p-6 rounded-2xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-1/4 lg:-translate-y-1/2 z-20 transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center top-[50%]">
                <div className="p-4 rounded-full">
                  <img
                    src="/assets/imges/Image 2.png"
                    alt="Generate Traffic Icon"
                    className="w-8 h-8 object-contain relative"
                  />
                </div>
                <p className="text-gray-800 text-center text-sm font-semibold">
                  Generate Traffic
                </p>
              </div>

              <div className="floating-2 absolute  right-1/4 md:right-10 lg:right-20 bg-white p-6 rounded-2xl shadow-xl transform translate-x-1/2  md:translate-x-0  z-20 transition-all duration-300 hover:scale-105 border border-gray-100 flex flex-col justify-center items-center ">
                <div className="p-4 rounded-full">
                  <img
                    src="/assets/imges/start-up.png"
                    alt="Launch Sales Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="text-gray-800 text-center text-sm font-semibold">
                  Launch Sales
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="flex items-center w-full mt-5">
          <hr className="w-[10%] border-t border-gray-300" />

          <span className="text-blue-500 hover:text-blue-700 text-2xl mx-4 whitespace-nowrap">
            hello@domain.com
          </span>

          <hr className="flex-grow border-t border-gray-300" />
        </div>
      </section>

      <section>
        <ContentFour />
      </section>
      <section>
        <ContentFive />
      </section>
      <section>
        <ContentSix />
      </section>
      <section>
        <ContentSeven />
      </section>
      {/* </div> */}
    </>
  );
};

export default Home;
