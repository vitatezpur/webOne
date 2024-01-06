// CourseCard.js
import React from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { duration } from 'moment';

const CourseCard = ({ title, description, tags, alt, img,duration }) => {
  return (
    <Link href="/enrollnow">
    <div  className="max-w-sm min-w-[40%] rounded overflow-hidden shadow-lg m-4 transition-transform duration-300 transform hover:scale-105">
      <img className="w-full" src={img} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-2 mx-[-3px] w-full flex flex-wrap">
          {tags &&
            tags.map((tag, index) => (
              <span key={index} className="text-gray-500 mr-2 text-sm bg-gray-100 rounded-[20px] px-3 py-1 mt-1">
                #{tag}
              </span>
            ))}
           
        </div>
        
        
       
      </div>
      

      <p className="my-1 px-7 text-sm text-gray-500">Duration:<span className=""><b>{duration}</b></span></p>

      <div className="px-6 py-4 flex">
        <Link href="/enrollnow">
          <button className="bg-[#9E0EB3]  text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </Link>
        <Link href="/contactus">
        
        <button className="text-[#000000] border rounded border-[#000000] py-2 px-4 flex items-center transition-transform duration-300 transform hover:scale-105">
                 Get Syllabus <FaDownload className="ml-1 " />
        </button>
          
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
