import React from 'react';

import HtmlHead from '@/components/HtmlHead';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useState } from 'react';
// import Slider from '@/components/home/Slider';
import AOS from "aos";
import "aos/dist/aos.css";
// import Hero from '@/components/home/Hero';
import HeroTwo from '@/components/home/HeroTwo';


const courseInfo=[
  {
    key:2,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    key:3,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    key:4,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    key:5,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:false
  },
  {
    key:6,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  }
]
import CourseSec from '@/components/home/CourseSec';
import ContactForm from '@/components/common/ContactForm';
import AlumniSection from '@/components/AlumniSection';
import StudentTestimonials from '@/components/StudentTestimonials';
import CourseSec2 from '@/components/home/CourseSec2';
import GlanceSec from '@/components/home/GlanceSec';

function index() {


  
  return (
    <>
    <HtmlHead/>
    
    <Header/>
    <HeroTwo/>
    <CourseSec AOS={AOS}/>
  
    <div className='p-20'>
      <h5 className='text-4xl'>Have a Dought ?</h5>
<p className='text-sm'>Hey you can contact us anytime</p>
<ContactForm/>
    </div>
    <AlumniSection/>
    <StudentTestimonials/>
    <GlanceSec/>
    <Footer/>
   
    </>
  )
}

export default index;