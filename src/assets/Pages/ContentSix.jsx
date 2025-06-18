import { Mail, MapPin, Phone } from "lucide-react";

const ContentSix = () => {
  return (
    <div className="min-h-screen font-sans flex items-center bg-white justify-center p-4 sm:p-6 lg:p-8">
      <div className=" p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl w-full flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center p-4 bg-white shadow-2xl rounded-3xl ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
            Free Consultation
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 text-center max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <form className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full sm:flex-1 p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full sm:flex-1 p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 resize-none overflow-hidden" // Changed to resize-none and overflow-hidden
            ></textarea>
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 whitespace-nowrap ">
                Put Us To Work
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Don't like Filling up forms ?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone size={24} className="text-gray-700 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Contact number
                </h3>
                <p className="text-gray-600">Enquiry : 1800-123-1234</p>
                <p className="text-gray-600">Appointment : + 1 622 123 3000</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail size={24} className="text-gray-700 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email address
                </h3>
                <p className="text-gray-600">Sales@brandexponents.com</p>
                <p className="text-gray-600">Info@brandexponents.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin size={24} className="text-gray-700 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Location
                </h3>
                <p className="text-gray-600">2130 West Street</p>
                <p className="text-gray-600">Germantown, TN 38138</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSix;
