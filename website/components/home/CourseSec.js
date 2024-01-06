import React from 'react';
import PopularCourseCard from '../PopularCourseCard';

export default function CourseSec() {
  const courseInfo = [
    {// ... your course information array
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
  }, {
    key:6,
    titel: " PGDCA",
    duration:"12 Month",
    img:"https://placekitten.com/300/200",
    description:" some text for Description of the course.Some more text for Description of the course.",
    tags: ["PGDCA","Word","Excel","Tally","Canva"],
    isPopular:true
  }
  ];
  let popularCoursesCount = 0;

  return (
    <div className="w-auto">
      <div className="w-auto ">
        <div className='popular w-auto flex flex-wrap overflow-y-auto '>
          {courseInfo.map((course) =>
            course.isPopular ? (
              <PopularCourseCard className="min-w-[30%]"
                key={course.key}
                title={course.titel}
                description={course.description}
                tags={course.tags}
                img={course.img}
                alt={course.description}
                duration={course.duration}
                count={popularCoursesCount++}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
