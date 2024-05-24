import React from 'react';
import deal1 from '/deal1.jpg'
import deal2 from '/deal2.jpg'
import deal3 from '/deal3.jpg'
import deal4 from '/deal4.jpg'
import deal5 from '/deal5.jpg'

const ImageGallery = () => {


  return (
    <div className="container mx-auto px-4">
      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="hidden md:block md:w-1/2 px-4">
            <div
              className="h-full w-full bg-cover rounded shadow-md"
              style={{ backgroundImage: `url(${deal1})` }}
            ></div>
          </div>
          <div className="md:w-1/2 h-auto px-4">
            <div className="mb-8">
              <img className="rounded shadow-md" src={deal2} alt="" />
            </div>
            <div>
              <img className="rounded shadow-md" src={deal3} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded shadow-md" src={deal4} alt="" />
          </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded shadow-md" src={deal5} alt="" />
          </div>
        </div>
      </section>

     

   
    </div>
  );
};

export default ImageGallery;
