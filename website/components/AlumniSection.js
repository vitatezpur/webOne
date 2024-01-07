import React,{useEffect} from "react";

const AlumniSection = ({AOS}) => {
  const alumniData = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'TechCo Inc.',
      photo: 'https://placekitten.com/200/200', // Replace with actual photo URL
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna at maximus fringilla.',
    },
    // Add more alumni data as needed
  ];
  useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, [AOS]);

  return (
    <div className="bg-gray-100 py-12" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Proud Alumni</h2>
        <p className="text-gray-600">
          Our alumni, who have passed out from our institution, have achieved remarkable success and established themselves
          in various esteemed organizations.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((alumni) => (
            <div key={alumni.id} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={alumni.photo}
                alt={`${alumni.name} - ${alumni.position}`}
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-2">{alumni.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{alumni.position}</p>
              <p className="text-sm text-gray-500">{alumni.company}</p>
              <p className="mt-4 text-sm text-gray-700">{alumni.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniSection;
