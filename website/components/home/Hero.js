import React from 'react';

function Hero() {
  return (
    <div className="w-full h-[690px]">
      <div className="w-full h-[690px] relative">
        <div
          className="w-full h-[400px] sm:h-[690px] md:h-[690px] top-0 left-0 bg-cover"
          style={{ backgroundImage: `url(/assets/img/herobg.png)` }}
        >
          <img
            className="hidden md:block absolute w-[754px] h-[690px] top-0 left-[686px] object-cover"
            alt="Dsc removebg"
            src={"/assets/img/model.png"}
          />
        </div>
        <div className="absolute w-full text-center md:text-left top-[50%]  transform -translate-y-1/2 px-4">
          <h2 className="text-white pt-8 font-bold text-[3rem] sm:leading-normal tracking-[0] leading-[6.3rem] mb-4">
            Mastering Computers
          </h2>
          <p className="text-[#f9ff00] font-bold text-xl md:text-3xl mb-4">
            Transforming Students for Future Success.
          </p>
          {/* button goes here */}
          <a
  href="#your-link" // Add your link here
  className=" rounded-[8px] p-[0.5rem]   bg-[#F05BE5] mx-auto md:mx-0 text-white font-bold text-auto md:text-2xl sm:text-2xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
>
  Get In Touch
</a>


          <div className="flex mt-[20px] justify-center md:justify-start lg:justify-start mb-4">
            <div className="w-[96px] h-[69px] mr-4">
              <div className="font-bold text-white text-2xl md:text-4xl">
                100+
              </div>
              <div className="font-normal text-white text-sm md:text-base">
                Courses
              </div>
            </div>
            <div className="w-[98px] h-[69px]">
              <div className="font-bold text-white text-2xl md:text-4xl">
                20K+
              </div>
              <div className="font-normal text-white text-sm md:text-base">
                Students
              </div>
            </div>
          </div>
          <p className="text-white font-normal text-sm md:text-base">
            Craft your success journey with{' '}
            <span className="font-bold">Vintage IT Academy</span>'s flexible career courses—online, offline, and hybrid
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
