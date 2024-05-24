import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); 

  const handleNav = () => {
    setNav(!nav);
    setProfileDropdown(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
    navigate("/");
  };

  return (
    <>
      <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto">
          <div className="flex items-center justify-between font-bold text-xl" >
            <Link to="/">Kaps</Link>

            <div className="lg:flex hidden gap-8 items-center">
              <Link to="/" className='text-[#191919] text-xl font-medium hover:text-red-500'>Home</Link>
              <Link to="/products" className='text-[#191919] text-xl font-medium hover:text-red-500'>Our Collections</Link>
              <a href="#" className='text-[#191919] text-xl font-medium hover:text-red-500'>Kaps Assured</a>
              <Link to="#" className='text-[#191919] text-xl font-medium hover:text-red-500'>About Us</Link>
              <Link to="#" className='text-[#191919] text-xl font-medium hover:text-red-500'>Testimonials</Link>
              <Link to="#" className='text-[#191919] text-xl font-medium hover:text-red-500'>Careers</Link>
              <Link to="#" className='text-[#191919] text-xl font-medium hover:text-red-500'>Contact</Link>
              {isLoggedIn ? ( // Render logout button if logged in
                <button onClick={handleLogout} className='text-xl font-medium text-white bg-red-500 px-6 py-2 rounded-full transition duration-300 hover:bg-red-600'>
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>
                </Link>
              )}
            </div>

            <div className="block lg:hidden z-40">
              <div onClick={handleNav}>
                {nav ? (<RxCross2 size={25} className='text-[#191919] cursor-pointer' />) : (<TiThMenu className='text-red-500 cursor-pointer' size={25} />)}
              </div>
            </div>
          </div>
        </div>

        <div className={`lg:hidden absolute right-0 w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 text-left ${nav || profileDropdown ? "right-0" : "right-[-100%]"} pt-24`}>
          <div className="flex flex-col gap-8 justify-end">
            <Link to="/" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Home</Link>
            
            <a href="#" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Our Collections</a>
            <Link to="/products" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Kaps Assured</Link>
            <Link to="/products" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>About Us</Link>
            <Link to="/products" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Testimonials</Link>
            <Link to="/products" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Careers</Link>
            <Link to="/products" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>Contact</Link>
            <Link to="/viewcart" className='text-[#191919] text-base font-medium hover:text-red-500' onClick={handleNav}>View cart</Link>
            {isLoggedIn ? ( 
              <button onClick={handleLogout} className='bg-red-500 px-6 py-2 text-white rounded-full transition duration-300 hover:bg-red-600'>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
