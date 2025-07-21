import React from 'react';
import {
  Utensils,
  Car,
  Pill,
  ShowerHead,
  Shirt,
  Dumbbell,
} from 'lucide-react'; 
import Reason from '../../reason/page';

const careServices = [
  {
    icon: Utensils,
    title: 'Meal Planning & Prep',
    desc: 'Nutritious meal planning and preparation',
  },
  {
    icon: Car,
    title: 'Transportation',
    desc: 'Safe transportation to appointments and errands',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    desc: 'Ensuring medications are taken as prescribed',
  },
  {
    icon: ShowerHead,
    title: 'Personal Hygiene',
    desc: 'Assistance with bathing and personal care',
  },
  {
    icon: Shirt,
    title: 'Laundry & Housekeeping',
    desc: 'Light housekeeping and laundry services',
  },
  {
    icon: Dumbbell,
    title: 'Activity Assistance',
    desc: 'Help with hobbies and physical activities',
  },
];

const AdditionalService = () => {
  return (
    <div className="bg-gray-50 px-6 md:px-20 py-14">
      <h2 className="text-4xl text-black font-bold text-center mb-4">Additional Support Services</h2>
      <p className="text-center text-gray-600 mb-10">
        Complementary services to ensure comprehensive care and support for daily activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <Icon className="w-10 h-10 text-[#3ec5c5]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Reason/>
    </div>
  );
};

export default AdditionalService;

