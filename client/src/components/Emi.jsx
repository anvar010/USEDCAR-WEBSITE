import React from "react";

export default function Emi() {
    return (
        <>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <p className="text-lg font-semibold">Looking for EMI ?</p>
                    <p className="text-sm text-black-500 font-semibold">Calculate your EMI easily with KAPS</p>
                </div>
                <button className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">Calculate Your EMI</button>
            </div>
        </>
    );
}
