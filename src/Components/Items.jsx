import React, { useState } from 'react'

const Items = ({ id, img, decrease, heart, eye, title, oldPrice, newPrice, rating, rating2, ratingReviews }) => {


    return (
        <section className='mx-auto '>
            <div className='w-[210px] h-[255px] items-center justify-center bg-gray-200 relative my-4 mx-2 rounded-lg'>
                <div className=' '>
                    <img src={img} alt="img" className='w-[180px] h-[150px] my-3' />
                </div>
                <div className='h-7 w-12 bg-[#DB4444] absolute top-[2%] items-center text-center'>
                    <p className='text-[0.8rem] text-white p-1'>{decrease}</p>
                </div>
                <div className='absolute right-[8px] top-2 flex flex-col gap-4'>
                    <div className='h-6 w-6 bg-white items-center rounded-xl p-1'>
                        <span className='-4'>{heart}</span>
                    </div>
                    <div className='h-6 w-6 bg-white items-center p-1 rounded-xl'>
                        <span className=''>{eye}</span>
                    </div>
                </div>
                <div className='mx-2'>
                    <p>{title}</p>
                </div>
                <div className='flex gap-3 mx-2 my-1'>
                    <p className='text-[#DB4444]'>{oldPrice}</p>
                    <del className='text-gray-600'>{newPrice}</del>
                </div>
                <div className='mx-2 py-1 flex gap-2'>
                    <div>
                        <p className='flex gap-1'>{rating}{rating}{rating}{rating}{rating2}</p>
                    </div>
                    <div className=''>
                        <p className='text-[0.7rem]'>{ratingReviews}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Items;