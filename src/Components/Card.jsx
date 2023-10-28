
import React from 'react'

const Card = ({ id, img, heart, eye, category, price, ratingStar, ratingRate }) => {
    return (
        <section className=' items-center my-3 bg-gray-200 h-[230px] w-[186px] rounded-lg'>
            <div className='w-[165px] h-[130px]  bg-white items-center justify-center mx-3 my-4 mb-[20px] rounded-lg'>
                <div className=' justify-center items-center mx-3 py-4 '>
                <img src={img} alt=""className='w-[140px] h-[113px]' />
                </div>
                <div>
                 <div className=''>
                    <p>{heart}</p>
                 </div>
                <div>{eye}</div>
                <div>
                    <p>{category}</p>
                </div>
                </div>
               
                
            </div>
        </section>

    )
}

export default Card;