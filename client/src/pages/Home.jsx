import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Header from '../components/Header';
import ImageGallery from '../components/KapsAssured';
import FeaturedCars from '../components/FeaturedCars';
import Emi from '../components/Emi';
import FindCar from '../components/FindCar';

function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <ImageGallery/>
      <FeaturedCars/>
      <Emi/>
      <FindCar/>
      <Footer/>
    </>
  );
}

export default Home;
