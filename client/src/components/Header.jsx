import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar />
      <div className="relative mt-5 w-full md:w-full h-auto md:h-screen">
        <Carousel
          showArrows
          autoPlay
          infiniteLoop
          showThumbs={false} 
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              >
                <FaChevronLeft className="inline-block h-8 w-8" />
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              >
                <FaChevronRight className="inline-block h-8 w-8" />
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            )
          }
        >
          <div className="relative">
            <img
              src="car1.jpg"
              alt="First slide"
              className="block w-full"
            />
            <div className="absolute left-5 top-2/4 py-5 text-left text-white md:block ">
              <h1 className="text-xl">
                Where <span className="text-red-500 font-bold">Trust</span> Meets the Road
              </h1>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
              <button className="bg-white text-black px-4 py-2">Explore Collections</button>
              <Link to={'/sellyourcar'}> <button className="bg-transparent border border-white text-white px-4 py-2">Sell Your Car</button>
             </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="car2.jpg"
              alt="Second slide"
              className="block w-full"
            />
            <div className="absolute left-5 top-2/4 py-5 text-left text-white md:block">
              <h1 className="text-xl">
                Find your perfect pre-owned <br/><span className="inline-block w-full text-center">car with us</span>
              </h1>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
              <button className="bg-white text-black px-4 py-2">Explore Collections</button>
              <Link to={'/sellyourcar'}> <button className="bg-transparent border border-white text-white px-4 py-2">Sell Your Car</button>
             </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="car3.jpg"
              alt="Third slide"
              className="block w-full"
            />
            <div className="absolute left-6 top-2/4 py-5 text-left text-white md:block">
              <h1 className="text-xl">
                <span className="text-red-500 font-bold">Trust</span> the road ahead. <br/>explore our cars today
              </h1>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
              <button className="bg-white text-black px-4 py-2">Explore Collections</button>
             <Link to={'/sellyourcar'}> <button className="bg-transparent border border-white text-white px-4 py-2">Sell Your Car</button>
             </Link>
            </div>
          </div>
        </Carousel>
      </div>
     
    </>
  );
}

export default Header;
