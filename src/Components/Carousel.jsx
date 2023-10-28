import React from 'react';
import { useState, useEffect } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
// import image1 from "../Assets/slider-assets/slider1 (2).png"

const Carousel = () => {
    const slides = [
       {
        img:require("../Assets/carousel-assets/slider1 (2).png")
       },
       {
        img:require("../Assets/carousel-assets/slider2.png")
       },
       {
        img:require("../Assets/carousel-assets/slider4.jpeg")
       },
       
       {
        img:require("../Assets/carousel-assets/Desktop_Homepage_Slider__712x384.jpg")
       },
       
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Function to automatically advance to the next slide
    const autoAdvance = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    // Set up a timer to automatically advance the slide every X milliseconds (e.g., 5000ms = 5 seconds)
    useEffect(() => {
        const timer = setInterval(autoAdvance, 3000); // Change image every 5 seconds

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    return (
        <>
        {/* slider */}
        <div className='max-w-[1400px]  m-auto lg:py-12 py-6 relative group w-2/3 lg:flex lg:flex-col'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                className='lg:w-[800px] lg:h-[450px] w-[250px] h-[300px] rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[38%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronLeft onClick={prevSlide} size={30}  className=''/>
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[48%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotsHorizontal />
                    </div>
                ))}
            </div>
        </div>

        </>
    );
}

export default Carousel;