import React from 'react'
import Bar1 from '../../public/images/bar.jpg'
import Robo1 from '../../public/images/Robo1.jpg'
import features from '../../public/images/features.png'
import { TbStack2Filled } from "react-icons/tb";
import { FcSms } from "react-icons/fc";
import skills from '../../public/images/Skills.png'
function Front() {
    return (
        <>
        <div className=' flex flex-row w-100% justify '>
        <div className='w-1/2 ml-64 mt-36'>
        <h1 className='text-6xl text-white font-bold'>Build Your</h1>
        <h1 className='text-6xl text-white font-bold'>Awesome</h1>
        <h1 className='text-6xl text-white font-bold'>Paltform</h1>
        <p className='text-gray-500 font-semibold mt-4'>Enver studio is a digital studio that offers several services</p>
        <p className='text-gray-500 font-semibold'>such as UI/UX Design to developers, we will provide the best </p>
        <p className='text-gray-500 font-semibold'>services for those of you who use our services</p>
        </div>
        <div className='w-1/2 mr-56 mt-20'>
        <div className='block'>

            </div>
            <img className='z-10 ' src={features} alt="" />
            
        </div>
    </div>
    
    

    <div className="md:flex  p-28 md:flex-row grid grid-cols-2 gap-5 justify-center ">
    <div className="flex flex-col items-center text-center transition duration-500 ease-out hover:-translate-y-5 cursor-pointer">
        <FcSms className="rounded-full  h-10 w-10  m-8"  alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg ">Website Devlopment</h2>
        <p className='text-gray-500'>Create a platform with the best and coolest quality from us</p>
    </div>
    <div className="flex hover:-translate-y-5 flex-col items-center text-center">
        <TbStack2Filled className="rounded-full h-10 w-10 m-8"  alt="AI-Powered Writing"/>    
        <h2 className="font-semibold text-lg">App Devlopment</h2>
        <p className='text-gray-500'>Create a platform with the best and coolest quality from us</p>
    </div>
    <div className="flex hover:-translate-y-5 flex-col items-center text-center">
        <FcSms className="rounded-full h-10 w-10  m-8"  alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">UI/UX Designer</h2>
        <p className='text-gray-500'>Create a platform with the best and coolest quality from us</p>
    </div>
    <div className="flex hover:-translate-y-5 flex-col items-center text-center">
        <TbStack2Filled className="rounded-full h-10 w-10  m-8"  alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">Cloud Services</h2>
        <p className='text-gray-500'>Create a platform with the best and coolest quality from us</p>
    </div>

    
    </div>

    <div className="flex justify-center items-center ">
    <img className="align-middle " src={skills} alt="" />
    </div>

        </>
    )
}

export default Front
