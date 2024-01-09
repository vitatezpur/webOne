import React , {useState,useEffect} from 'react';
import StatCard from "./StatCard";

const GlanceSec = ({AOS}) => {
  useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, [AOS]); 

  return (
    <div className="bg-gray-100 p-8" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Vintage IT Academy at a Glance</h1>

        <div className="flex flex-wrap -mx-4">
          <StatCard value="13+" label="Years of Experience" color="blue" />
          <StatCard value="25+" label="Qualified Teachers" color="green" />
          <StatCard value="20+" label="Courses Offered" color="yellow" />
          <StatCard value="5000+" label="Passout Students" color="purple" />
        </div>
      </div>
    </div>
  );
};


export default GlanceSec;
