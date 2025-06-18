import React from 'react'
const ContentFive = () => {
  return (
      <div className="flex flex-col md:flex-row w-full bg-white  overflow-hidden min-h-[500px]">
          
          <div className="w-full md:w-1/2 bg-blue-950 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Strategic Marketing <br /> with Clear
              Function
            </h1>
            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-8">
              You have a great idea for a whole new business, a new product
              line, or even just a new sku. We help you verify the need for that
              idea and find a path to profitability. Our team of experts in
              growth, design and innovation are at your service. We’ll ensure
              you’ve got the best chance of success for your new idea
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 self-start">
              Put Us To Work
            </button>
          </div>

      
          <div
            className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto"
            style={{
              backgroundImage:
                "url('/assets/imges/MicrosoftTeams-image (48).png')",
            }}
          ></div>
        </div>
  )
}

export default ContentFive