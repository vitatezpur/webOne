// CoursePreviewCard.js
import React from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

const PopularCourseCard = ({ title, description, tags, alt, img, duration, courseId }) => {
  return (
    <Link href={`/courses/#${title}`}>
      <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform duration-300 transform hover:scale-105">
        <img className="w-full h-60 object-cover" src={img} alt={alt} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-6 py-4 bg-gradient-to-t from-black to-transparent">
          <div>
            <div className="font-bold text-white text-xl mb-2">{title}</div>
            <span className="my-1 text-sm text-gray-100 absolute right-5 top-2">Duration: <b>{duration}</b></span>
            {/* <p className="text-gray-300 text-base">{description}</p> */}
          </div>
          <div className="mt-2 w-full flex flex-wrap">
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className="text-gray-300 mr-2 text-sm bg-gray-800 rounded-[20px] px-3 py-1 mt-1">
                  #{tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularCourseCard;
