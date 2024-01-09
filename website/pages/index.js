import React, {useState} from 'react';
import HtmlHead from '@/components/HtmlHead';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import HeroTwo from '@/components/home/HeroTwo';
import CourseSec from '@/components/home/CourseSec';
import AlumniSection from '@/components/AlumniSection';
// import StudentTestimonials from '@/components/StudentTestimonials';
import GlanceSec from '@/components/home/GlanceSec';
import Testimonial from '@/components/Testimonial';
import Whyus from '@/components/home/Whyus';
// import WhatsAap from '@/components/common/WhatsAap';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import PlacementPartner from '@/components/PlacementPartner';
import {courseInfo} from '@/datax/courseInfo';




function index() { 
  return (
    <>
    <HtmlHead/>  
    <Header/>
    <HeroTwo AOS={AOS}/>
    <CourseSec AOS={AOS} courseInfo={courseInfo}/>
    <Whyus/>
    <GlanceSec AOS={AOS}/>
    <PlacementPartner AOS={AOS}/>
    <AlumniSection AOS={AOS}/>
   
    {/* <StudentTestimonials AOS={AOS}/> */}
    <Testimonial AOS={AOS}/>
    <WhatsAppIcon phoneNumber="+918011746848" message="Hello VITA"/>
    
    <Footer/>
   
    </>
  )
}

export default index;