import React from 'react';

import HtmlHead from '@/components/HtmlHead';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
// import Slider from '@/components/home/Slider';
// import AOS from "aos";
import "aos/dist/aos.css";
// import Hero from '@/components/home/Hero';
import HeroTwo from '@/components/home/HeroTwo';


function index() {
  return (
    <>
    <HtmlHead/>
    
    <Header/>
    <HeroTwo/>
    {/* <Hero/> */}
    {/* <Slider AOS={AOS}/> */}

    
    <div>
Hello i ma home 
    </div>
    <Footer/>
   
    </>
  )
}

export default index;