import React, {useState} from 'react';
import { Menu, X, Check } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CourseCard from '@/components/CourseCard';
import ContactForm from '@/components/common/ContactForm';
import {faqs} from '@/datax/faq';
import {courseInfo} from '@/datax/courseInfo';



export default function PricingPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formData,setFormData] = useState({name:'',email:'',mobile:'',course:'',message:''});
  const [showSetter,setShowSetter] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const submitCourseenq=(id)=>{
 if(id !==""){
  let coursedd = courseInfo.filter((course)=>course.id === id)?.[0] ?? null;
  if(coursedd){
    setFormData({...formData,message:coursedd?.titel ?? '',course:id});
  }
 }
  }

  return (
    <>
    <Header/>
    <ContactForm formData = {formData} setFormData = {setFormData} isoutside={true} showSetter = {showSetter} setShowSetter={setShowSetter}/>
    <div className="mx-auto max-w-7xl px-2 md:px-4">   
      <div>
        <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Our Exclusive Courses
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
          At Vintage IT Academy, we provide cutting-edge courses meticulously designed for both career excellence and comprehensive development. Our curriculum integrates the latest industry advancements, offering hands-on training that goes beyond theoretical knowledge. 
          </p>
        </div>
        <div className="mt-8 w-full space-y-4  md:mt-12">
          <div className="grid space-y-8  lg:grid-cols-3 lg:space-x-8 lg:space-y-4">
            {courseInfo.map((course)=>(
                  <CourseCard id={course.id} title={course.titel} description={course.description} tags={course.tags} img={course.img} alt={course.description} duration={course.duration} submitCourseenq={submitCourseenq} setShowSetter={setShowSetter} />
            )

            )}        
                 
          </div>
        </div>
        <div className="mt-14 space-y-16 bg-white py-12">
          <div>
            <div className="">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-2xl font-bold leading-10 text-gray-900">FAQS</p>
                </div>
                <p className="max-w-xl text-base text-gray-600">
                  Everything you need to know about the product and billing. Can&apos;t find the
                  answer you&apos;re looking for? Please chat to our friendly team.
                </p>
                <hr className="my-8" />
              </div>
            </div>
            {/* faq */}
            {faqs.map((item, index) => (
              <div key={`faq-group-${index}`} className="grid md:grid-cols-3 md:space-x-8">
                {item.map((faq) => (
                  <div key={faq.question} className="my-8 space-y-5">
                    <div className="flex w-full flex-col space-y-2">
                      <p className="w-full text-lg font-semibold text-gray-900">{faq.question}</p>
                      <p className="w-full text-base leading-normal text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="mt-10">
              <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
                <div className="space-y-2">
                  <p className="text-xl font-semibold leading-loose text-gray-900">
                    Still have questions?
                  </p>
                  <p className="text-base text-gray-600 md:text-lg md:leading-7">
                    Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly
                    team.
                  </p>
                </div>
                <button
                  type="button" onClick={()=>setShowSetter(true)}
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <Footer/>
      
    </div>
    </>
  )
}
