import Link from 'next/link';
import React from 'react';

function Whyus() {
  const jobData = [
    { title: 'MSME', description: "Recognized by the Government of India's Ministry of Micro, Small, and Medium Enterprises.", icon: '/Logo/msme.png' },
    { title: 'Tally Prime', description: 'Proud partners with Tally Prime for premier accounting education.', icon: '/Logo/tallyprime.png' },
    { title: 'ISO:2015', description: 'Lorem ipsum dolor sit amet consectetur.', icon: '/Logo/iso.png' },
    // Add more job data as needed
  ];

  return ( 
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2  lg:gap-x-16">
            <div className="max-w-lg lg:text-left sm:text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">What Makes us Special?</h2>

              <p className="mt-4 text-gray-600">
               <b>Why Vintage IT Academy?</b> Choose Vintage IT Academy for a decade-long legacy of excellence in IT education. Established in 2010, it has transformed countless lives in Assam, providing top-notch computer education. With a visionary founder, commitment to quality, and proven success, Vintage IT Academy is your trusted partner in shaping successful IT careers
              </p>

              <Link
                href="./about"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3" data-aos="flip-up">
              {jobData.map((job, index) => (
                <div
                  key={index}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                >
                  <span className="inline-block rounded-lg bg-gray-50">
                    <img src={job.icon} alt={`${job.title} icon`} className="h-[130px] w-[130px]" />
                  </span>

                  <h2 className="mt-2 font-bold">{job.title}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whyus;
