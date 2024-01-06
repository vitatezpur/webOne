import React from 'react';
// import PopularCourseCard from '../PopularCourseCard';

export default function CourseSec2() {
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
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" alt="Carousel Item 1" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" alt="Carousel Item 2" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" alt="Carousel Item 3" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" alt="Carousel Item 4" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" alt="Carousel Item 5" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" alt="Carousel Item 6" />
      </div>
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" alt="Carousel Item 7" />
      </div>
    </div>
  );
}

