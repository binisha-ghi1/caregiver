import React from 'react';
import { CheckCircle } from 'lucide-react';

const List = [
  { point: 'Modern rooms that can be personalized with your own furniture.' },
  { point: '24/7 medical care and support from our professional staff.' },
  { point: 'A wide range of activities and programs to keep you engaged and active.' },
  { point: 'Regular health check-ups and monitoring to ensure your well-being.' },
  { point: 'Personalized care plans designed to meet your specific needs.' },
  { point: 'Pet-friendly environment to keep your furry companions close.' },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col  flex-wrap lg:flex-row items-center justify-center bg-white text-black px-6 md:px-20 py-10 gap-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/images/nursing.jpg"
          alt="Nursing Care"
          className="w-full h-auto object-cover rounded-lg shadow"
        />
      </div>

      {/* Text & List Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-2xl text-blue-800 font-semibold text-center lg:text-left">
          About Us
        </h2>
        <h1 className="text-4xl font-bold text-center lg:text-left">
          Senior Care Without the Worry
        </h1>

        <ul className="space-y-4 text-gray-700">
          {List.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-1" size={20} />
              <span>{item.point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;

