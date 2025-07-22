import React from 'react';
import {
  CalendarClock,
  ShieldCheck,
  Users2,
  HeartHandshake,
} from 'lucide-react'; // ✅ Make sure to install this package if not already

const WhyChooseCareGiver = [
  {
    icon: CalendarClock,
    title: 'Flexible Scheduling',
    description: 'Care plans tailored to your schedule and needs',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'All caregivers are fully licensed and insured',
  },
  {
    icon: Users2,
    title: 'Family Involvement',
    description: 'Regular communication and family meetings',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    description: 'Genuine care and emotional support',
  },
];

const Reason = () => {
  return (
    <div className=" px-6 md:px-20 py-14 flex-wrap">
      <h2 className="text-4xl font-bold text-center text-black mb-4">
        Why Choose CareHeart?
      </h2>
      <p className="text-center text-gray-600 mb-10">
        We go beyond basic care to provide comprehensive support that makes a real <br className="hidden md:block" />
        difference.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WhyChooseCareGiver.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center  p-6 rounded-xl s transition-shadow duration-300"
            >
              <div className="p-4 bg-[#e5f2ff] rounded-full mb-4">
                <Icon className="w-10 h-10 text-[#3ec5c5]" />
              </div>
              <h3 className="font-bold text-lg text-black">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reason;

