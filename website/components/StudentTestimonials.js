import React, {useEffect} from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = ({AOS}) => {
  const testimonialsData = [
    {
      id: 1,
      content: `I'm Nisha Ahmed, a student at Vintage IT Academy, and I'm really grateful to our wonderful teachers. Vintage IT Academy is such a welcoming place for learning computers.`,
      author: 'Nisha Ahmed',
      role: 'Student',
      image: 'https://via.placeholder.com/150', // Placeholder URL
    },
    {
      id: 2,
      content: `As a student, completing the DCA course at Vintage IT Academy was enriching. The comprehensive curriculum and supportive environment improved my computer skills significantly. Highly recommended!`,
      author: 'Jyotishman Saikia',
      role: 'Student',
      image: 'https://via.placeholder.com/150', // Placeholder URL
    },
    {
      id: 3,
      content: `I completed the Tally and DTP course, including various accounting and design software, at Vintage IT Academy, Tezpur. The friendly teachers and the academy's support were invaluable. Grateful for the experience.`,
      author: 'Dhritiman Barman',
      role: 'Student',
      image: 'https://via.placeholder.com/150', // Placeholder URL
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, [AOS]);


  return (
    <section className="relative w-full isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="flex items-center justify-center">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                <figure className="mt-10">
                  <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>{testimonial.content}</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src={testimonial.image}
                      alt=""
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
