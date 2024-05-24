import React from "react";

export default function FindCar() {
    return (
        <>
            <div className="bg-emerald-500 rounded-lg p-6 mb-10">
                <h2 className="text-2xl font-semibold mb-4">Find The Perfect Car For You</h2>
                <p className="text-gray-700 mb-4">Answer Few Questions to Find a car that is perfect for you</p>
                <button className="bg-white text-black-700 px-4 py-2 rounded-md shadow-md hover:bg-green-100 transition duration-300 ease-in-out">Find Car</button>
            </div>
            <div className="rounded-lg p-6 flex justify-between items-center">
                <p className="text-lg text-black">Want to get your deam car from us ?</p>
                <div>
                    <button className="bg-emerald-500  text-white px-4 py-2 rounded-md mr-2  hover:bg-green-600 transition duration-300 ease-in-out">Contact Us</button>
                    <button className="bg-transparent border-2 border-emerald-500 px-4 py-2 rounded-md text-emerald-500 hover:bg-green-100 transition duration-300 ease-in-out">Chat with us on Whatsapp</button>


                </div>
            </div>
        </>
    );
}
