import React, { useState } from "react";
import axios from "axios";

function SellYourCar() {
  const [carDetails, setCarDetails] = useState({
    carregnumber: "",
    brand: "",
    model: "",
    fuelType: "",
    registeredYear: "",
    kmDriven: "",
    expectedPrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/cars/submit", carDetails); 
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting car details:", error);
    }
  };
  

  const handleBrandChange = (e) => {
    setCarDetails((prevState) => ({
      ...prevState,
      brand: e.target.value
    }));
  };

  const handleModelChange = (e) => {
    setCarDetails((prevState) => ({
      ...prevState,
      model: e.target.value
    }));
  };

  const handleFuelTypeChange = (e) => {
    setCarDetails((prevState) => ({
      ...prevState,
      fuelType: e.target.value
    }));
  };

  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="w-full">
          <h2 className="text-center text-black-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  id="carregnumber"
                  name="carregnumber"
                  placeholder="Your Car Registration Number"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.carregnumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <select
                  id="brand"
                  name="brand"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.brand}
                  onChange={handleBrandChange}
                >
                  <option value="">Select Brand</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Ford">Ford</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Chevrolet">Chevrolet</option>
                </select>
              </div>

              <div className="mb-5">
                <select
                  id="model"
                  name="model"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.model}
                  onChange={handleModelChange}
                >
                  <option value="">Select Model</option>
                  <option value="Accord">Accord</option>
                  <option value="Civic">Civic</option>
                  <option value="CR-V">CR-V</option>
                  <option value="Pilot">Pilot</option>
                  <option value="Corolla">Corolla</option>
                  <option value="Camry">Camry</option>
                  <option value="RAV4">RAV4</option>
                  <option value="Highlander">Highlander</option>
                  <option value="F-150">F-150</option>
                  <option value="Escape">Escape</option>
                  <option value="Explorer">Explorer</option>
                  <option value="Rogue">Rogue</option>
                  <option value="Altima">Altima</option>
                  <option value="Sentra">Sentra</option>
                  <option value="Malibu">Malibu</option>
                  <option value="Equinox">Equinox</option>
                </select>
              </div>

              <div className="mb-5">
                <select
                  id="fuelType"
                  name="fuelType"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.fuelType}
                  onChange={handleFuelTypeChange}
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  id="registeredYear"
                  name="registeredYear"
                  placeholder="Registered Year"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.registeredYear}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <input
                  type="number"
                  id="kmDriven"
                  name="kmDriven"
                  placeholder="KM Driven"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.kmDriven}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  id="expectedPrice"
                  name="expectedPrice"
                  placeholder="Expected Price"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={carDetails.expectedPrice}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="block w-full bg-emerald-500 text-white font-bold p-4 rounded-lg">Send Proposal</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellYourCar;