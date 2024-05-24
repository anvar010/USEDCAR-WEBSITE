import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarDetailsTable = () => {
  const [carDetails, setCarDetails] = useState([]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/cars/car-details');
        setCarDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Car Details</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Km Driven</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {carDetails.map((car) => (
            <tr key={car._id}>
              <td className="px-6 py-4 whitespace-nowrap">{car.carregnumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.fuelType}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.registeredYear}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.kmDriven}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.expectedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailsTable;
