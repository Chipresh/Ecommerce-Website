import React from 'react'
import { useState, useEffect } from 'react';


const Flashsales = () => {

    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    setMinutes((prevMinutes) => {
                        if (prevMinutes === 0) {
                            setHours((prevHours) => {
                                if (prevHours === 0) {
                                    // Timer is complete, do something
                                    clearInterval(timer);
                                    return 0;
                                }
                                return prevHours - 1;
                            });
                            return 59;
                        }
                        return prevMinutes - 1;
                    });
                    return 59;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <section>
                <div className='flex flex-col mx-20'>
                    <div className='flex gap-3'>
                        <span className='h-8 w-3 my-2 bg-[#DB4444]'></span>
                        <h3 className='my-3'>Today's</h3>
                    </div>

                    {/* <div> */}
                        <div className='flex gap-36'>
                            <div>
                                <p className='my-10 text-2xl font-extrabold text-[#DB4444]'>Flash Sales</p>
                            </div>
                            <div className="flex  items-center justify-center gap-4">
                                <div className="flex items-center flex-col mb-2">
                                    <div className="">Hours <span className='text-[#DB4444] font-extrabold'>:</span></div>
                                    <div className="text-4xl font-semibold mr-2">{hours.toString().padStart(2, '0')}</div>
                                </div>
                                <div className="flex flex-col items-center  mb-2">
                                    <div className="">Minutes<span className='text-[#DB4444] font-extrabold mx-2'>:</span></div>
                                    <div className="text-4xl font-semibold mr-6">{minutes.toString().padStart(2, '0')}</div>
                                </div>
                                <div className="flex flex-col items-center mb-2">
                                    <div className="">Seconds</div>
                                    <div className="text-4xl font-semibold mr-2">{seconds.toString().padStart(2, '0')}</div>
                                </div>
                            </div>
                        </div>
                       
                    {/* </div> */}
                </div>
            </section>

            <section>
                <div>

                </div>
            </section>
        </>
    )
}
export default Flashsales;