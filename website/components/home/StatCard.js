import React , {useState,useEffect} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const StatCard = ({ value, label, color }) => {
    const borderColorClass = `border-t-4 border-${color}-500`;
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mb-8">
        <div className="h-full p-6 rounded-lg text-center ">
          <VisibilitySensor>
            {({ isVisible }) => (
              <CountUp start={isVisible ? 1 : 0} end={parseInt(value)} duration={2} useEasing={true}>
                {({ countUpRef }) => (
                  <span ref={countUpRef} className="text-5xl font-bold text-blue-800 block"></span>
                )}
              </CountUp>
            )}
          </VisibilitySensor>
          <span className="text-gray-600">{label}</span>
        </div>
      </div>
    );
  }
export default StatCard;