import React, {useState,useEffect} from 'react';

import HtmlHead from '@/components/HtmlHead';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
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
import GlanceSec from '@/components/home/GlanceSec';

function index() { 
const [formData,setFormData] = useState({name:'',email:'',mobile:'',course:'',message:''});

  return (
    <>
    <HtmlHead/>
    
    <Header/>
    <HeroTwo/>
    <ContactForm formData = {formData} setFormData = {setFormData}/>
    <CourseSec AOS={AOS}/>
    <AlumniSection/>
    <StudentTestimonials/>
    <GlanceSec/>
    <Footer/>
   
    </>
  )
}

export default index;