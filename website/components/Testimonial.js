import React from 'react';

const reviewsData = [
    {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          ' a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum  ab saepe illo est quia obcaecati neque quibusdam eius accusamus error adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consecteturdolor sit, amet consectetur a consequuntur recusandae adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur dolor sit, amet consectetur a consequuntur recusandaeadipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
      },
      {
        name: 'Paul Starr',
        imageSrc:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        rating: 5,
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      },
    ];

const ReviewCard = ({ name, imageSrc, rating, content }) => {
  return (
    <div className="mb-8 sm:break-inside-avoid" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt={name}
            src={imageSrc}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-yellow-500">
              {[...Array(rating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{content}</p>
      </blockquote>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="bg-white" >
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our Student
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review}  data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
