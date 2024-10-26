import React, { useEffect, useState } from 'react';


function Navbar() {
    // Dark and light mode
    

    

    
    
        
        
        const [open,setOpen]=useState(false)

    return (
        <>
        <div className='shadow-md w-full relative z-0 top-0 left-0 text-white '>
            <div className='md:flex bg-transparent items-center justify-between py-4 md:px-10 px-7 mx-10'>
                <div className=' font-sans text-2xl cursor-pointer flex items-center  text-[#5454D4]'> 
                    
                    TASTEZY SERVICES
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </div>
                <ul className={`text-white md:flex md:justify-center md:items-center md:pb-0 space-x-4 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                    <li><a className=' text-l text-[#5454D4]' href="">Home</a></li>
                    
                
                    
                    <li><a className=' text-l ' href="">Services</a></li>
                    <li><a className=' text-l ' href="">Our Project</a></li>
                    <li><a className=' text-l '  href="">About us</a></li>
                    
                    

                </ul>
                <button className=" text-white px-5 py-2  m-5 border-2 border-white rounded-md ">
                        Contact us
                    </button>
            </div>
        </div>
        </>
    );
}

export default Navbar;