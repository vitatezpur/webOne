import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useEffect,useState} from 'react'
import Slider from 'react-slick';
import {stats} from '../../datax/stats';
import Link from 'next/link';
// import banner1 from "../../public/assets/img/banner1.png"

// import Footer from '../common/Footer'
import { FaGraduationCap } from 'react-icons/fa';

function HeroTwo() {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const carouselImages = [
    '/assets/img/banner1.png',
    'https://images.unsplash.com/photo-1568658176307-bfbd2873abda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1681483567775-2f447b13431a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more image URLs as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  
  return (
    <>
    <div
      className="relative w-full  bg-cover bg-center text-white  h-[80vh]  lg:h-screen flex pt-12 justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Translucent color overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-4xl  w-full text-center relative z-10 mx-5 ">
      <div className='mx-10 my-10'>
      <Slider {...settings}>
            {carouselImages.map((image, index) => (
            
                <div key={index} className='bg-gray-50  sm:w-20 h-40 lg:w-2/4  lg:h-80  rounded-2xl overflow-hidden'>
                  <img src={image} alt={`Carousel ${index}`} className="w-full h-full object-cover" />
                </div>
                
                
              
            ))}
          </Slider>
          </div>

        


        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-5 font-extrabold leading-tight mb-4">
          Welcome to Vintage IT Academy
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Empowering Minds, Shaping Futures in IT and Design Education
        </p>
        <Link href="/courses" passHref legacyBehavior>
        <a className="bg-blue-500 text-white px-10 sm:px-6 py-6 sm:py-3 rounded text-base sm:text-lg hover:bg-blue-600 transition duration-300">
          Explore Courses
        </a>
        </Link>
      </div>
      <div className=" lg:block absolute top-0 left-0">
     
      </div>
    </div>

    </>
  )
}

export default HeroTwo