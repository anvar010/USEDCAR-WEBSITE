import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function FeaturedCars() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carData = [
    { name: 'BMW 330i GT M Sports', price: '$500000', image: 'add1.jpg' },
    { name: 'Jeep Wrangler', price: '$400000', image: 'add2.jpg' },
    { name: 'Mini Cooper', price: '$500000', image: 'add3.jpg' }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="relative mt-5 w-full md:w-full h-auto md:h-screen">
        <Carousel
          showArrows
          autoPlay
          infiniteLoop
          showThumbs={false}
          onChange={handleSlideChange}
        >
          {carData.map((car, index) => (
            <div key={index} className="relative">
              <div className="carousel-image-container">
                <img
                  src={car.image}
                  alt={`Car ${index + 1}`}
                  className="block w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
              <div
                className="absolute bottom-0 left-0 h-1 bg-green-500"
                style={{
                  width: `${((currentSlide + 1) / carData.length) * 100}%`
                }}
              ></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">{car.name}</h2>
                <p>Price: {car.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default FeaturedCars;
