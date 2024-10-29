import React from 'react';
import mask from '../../public/images/mask.png';
import portfolio from '../../public/images/Portfolio.png'
function Work() {
    return (
        <>
        <div className=" py-12  text-white md:justify-center flex">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto p-6 rounded-lg bg-opacity-80">
                
                {/* Left portion */}
                <div className="relative w-full md:w-1/2 text-center md:text-left md:justify-center flex">
        <div className="relative z-10">
            <h3 className="text-md font-semibold text-purple-400 ml-24 space-y-5">Featured Project</h3>
            <h1 className="text-4xl font-bold text-white ml-24 mb-10">Example Project</h1>
            <p className="bg-gradient-to-r from-white/10 to-white/80 backdrop-blur-2xl border-none rounded-md shadow-lg w-full text-white p-5 opacity-80  text-opacity-100 ml-24">
            This is a brief description of the project. It showcases unique features and innovative solutions that make it stand out.
            </p>
        </div>
    </div>

                
                {/* Right portion */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">    
                    <img src={mask} alt="Mask Image" className="h-60 w-96 rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" />
                    <div className="absoulte w-full h-full bg-blue-500 top-0 left-0 z-10"></div>
                </div>
            </div>
        </div>


{/**2nd part */}
<div className=" py-12  text-white">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto p-6 rounded-lg bg-opacity-80">
                
                {/* Left portion */}
                <div className="relative w-full md:w-1/2 text-center md:text-left ">
        <div className="relative z-10">
            <h3 className="text-md font-semibold text-purple-400 ml-24 space-y-5">Featured Project</h3>
            <h1 className="text-4xl font-bold text-white ml-24 mb-10">Example Project</h1>
            <p className="bg-gradient-to-r from-white/10 to-white/80 backdrop-blur-2xl border-none rounded-md shadow-lg w-full text-white p-5 opacity-80  text-opacity-100 ml-24">
            This is a brief description of the project. It showcases unique features and innovative solutions that make it stand out.
            </p>
        </div>
    </div>

                
                {/* Right portion */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">    
                    <img src={portfolio} alt="portfolio Image" className="h-60 w-96 rounded-lg transition-transform transform hover:scale-105 duration-500 ease-in-out" />
                    <div className="absoulte w-full h-full bg-blue-500 top-0 left-0 z-10"></div>
                </div>
            </div>
        </div>

</>

        
    );
}

export default Work;


