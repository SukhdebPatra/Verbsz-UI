import one from "../imges/7f8b9efe3994194ed166d401ccd840ec@2x.png";
import two from "../imges/4a08f65389dadc93a9aeba47bcd2d4fc@2x.png";
import three from "../imges/4363768806ca05ff7e78176e1f7053b6@2x.png";
const ContentSeven = () => {
  return (
    <div className="min-h-screen bg-blue-950 font-sans flex flex-col items-center p-4 sm:p-8 lg:p-12">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Past Market Validation Projects
        </h1>
        <p className="text-blue-200 text-base sm:text-lg leading-relaxed font-poppins">
          Entrepreneurs and Intrapreneurs choose Clear Function when they <br />{" "}
          need experts to help them find product market fit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-12 lg:mb-16 px-4 max-w-6xl w-full">
        <div
          className="relative h-[400px] rounded-xl shadow-lg flex flex-col items-center justify-start text-center transform transition-transform duration-300 hover:scale-105 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${one})`,
          }}
        >
          <div className="relative p-3 z-10 text-black">
            <h3
              className="text-lg sm:text-xl  mb-2 "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              The One where we battled a pandemic and delivered updated systems
              for a new client
            </h3>
          </div>
        </div>

        <div
          className="relative h-[400px] rounded-xl shadow-lg flex flex-col items-center justify-start text-center transform transition-transform duration-300 hover:scale-105 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${two})`,
          }}
        >
          <div className="relative p-3 z-10 text-black">
            <h3
              className="text-lg sm:text-xl  mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              The One where we battled a pandemic and delivered updated systems
              for a new client
            </h3>
          </div>
        </div>

        <div
          className="relative h-[400px] rounded-xl shadow-lg flex flex-col items-center justify-start text-center transform transition-transform duration-300 hover:scale-105 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${three})`,
          }}
        >
          <div className="relative p-3 z-10 text-black">
            <h3
              className="text-lg sm:text-xl  mb-2 "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              The One where we battled a pandemic and delivered updated systems
              for a new client
            </h3>
          </div>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 whitespace-nowrap ">
        Put Us To Work
      </button>
    </div>
  );
};

export default ContentSeven;
