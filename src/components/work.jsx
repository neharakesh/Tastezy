import React from 'react';
import mask from '../../public/images/mask.png';

function Work() {
    return (
        <div className=" py-12  text-white">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto p-6 rounded-lg shadow-lg bg-opacity-80">
                
                {/* Left portion */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Featured Project</h3>
                    <h1 className="text-4xl font-bold text-white">Example Project</h1>
                    <p className=" bg-gray-400 p-5 opacity-1">
                        This is a brief description of the project. It showcases unique features and innovative solutions that make it stand out.
                    </p>
                    
                </div>
                
                {/* Right portion */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src={mask} alt="Mask Image" className="h-60 w-96 rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out" />
                </div>
            </div>
        </div>
    );
}

export default Work;


