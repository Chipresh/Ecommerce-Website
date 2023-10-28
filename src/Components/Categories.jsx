import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosDesktop } from 'react-icons/io';
import { PiWatchThin } from 'react-icons/pi';
import { CiCamera } from 'react-icons/ci';
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerLight } from 'react-icons/pi';

const Categories = () => {
    return (
        <main className='mx-auto'>
            <section className='items-center justify-center mx-20 my-20 '>
                <div>
                    <div className='flex gap-2'>
                        <span className='h-8 w-3 bg-[#DB4444]'></span>
                        <h4 className='font-poppins p-1 text-[1rem] font-semibold text-[#DB4444]'>Categories</h4>
                    </div>
                    <h2 className='text-[2.2rem] tracking-tighter font-semibold leading-2 py-2'>Browse By Category</h2>
                </div>

                <div className='flex flex-wrap gap-6 py-8'>
                    <div className=' h-36 w-44 border-2 border-gray-400 items-center justify-center text-center '>
                        <IoIosPhonePortrait size={100} className='mx-9 my-1' />
                        <p>Phones</p>
                    </div>
                    <div className=' h-36 h- w-44 border-2 border-gray-400 items-center text-center'>
                        <IoIosDesktop size={100} className='mx-9 my-1'/>
                        <p>Computers</p>
                    </div>
                    <div className=' h-36 w-44 border-2 border-gray-400 items-center text-center'>
                        <PiWatchThin size={100} className='mx-8 my-1'/>
                        <p>Smartwatch</p>
                    </div>
                    <div className=' h-36 w-44 border-2 border-gray-400 items-center text-center'>
                        <CiCamera size={100} className='mx-9 my-1'/>
                        <p>Camera</p>
                    </div>
                    <div className=' h-36 w-44 border-2 border-gray-400 items-center text-center'>
                        <CiHeadphones size={100} className='mx-8 my-1'/>
                        <p>Headphones</p>
                    </div>
                    <div className=' h-36  w-44 border-2 border-gray-400 items-center text-center'>
                        <PiGameControllerLight size={100} className='mx-8 my-1'/>
                        <p>Gaming</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Categories;