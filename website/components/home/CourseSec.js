import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function CourseSec() {
  const courseInfo = [
    {// ... your course information array
    id:2,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    id:3,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    id:4,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  },
  {
    id:5,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:false
  },
  {
    id:6,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  }, {
    id:6,
    title: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  }
  ];

useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 15,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, []);

  return (
           <>
            <div className="glide-03 relative w-[95%] mt-14 mx-auto">
            <h2 className="featured-heading text-4xl">Most Popular Course</h2>
      <p className="sub-heading">Explore our top-rated and highly recommended course below.</p>
           
              <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                { courseInfo && courseInfo.length > 0 && courseInfo.map((course,ids)=>{
                   if(course.img && course.isPopular){
                    return (
                      <li key={ids}>
                         <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform duration-300 transform hover:scale-105">
                         <img src={course.img} alt={course?.title ?? ''} className="m-auto max-h-full w-full max-w-full"/>
                         <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-6 py-4 bg-gradient-to-t from-black to-transparent">
                             <div>
                               <div className="font-bold text-white text-xl mb-2">{course?.title ?? ''}</div>
                               <span className="my-1 text-sm text-gray-100 absolute right-5 top-2">Duration: <b>{course?.duration ?? ''}</b></span>
                             </div>
                             <div className="mt-2 w-full flex flex-wrap">
                               {course.tags &&
                                 course.tags.map((tag, index) => (
                                   <span key={index} className="text-gray-300 mr-2 text-sm bg-gray-800 rounded-[20px] px-3 py-1 mt-1">
                                     #{tag}
                                   </span>
                                 ))}
                             </div>
                          </div>
                                                   
                         </div>
                    </li>
                    )

                   }
                })
                }
              </ul> 
              </div>
            </div>
            <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
        </>
         );
}
