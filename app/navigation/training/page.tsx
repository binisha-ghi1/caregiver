import React from 'react';

const Training = [
  {
    title: 'Personal Care',
    desc: 'Assistance with daily activities including bathing, grooming, dressing, and mobility support.',
    points: [
      'Bathing & Hygiene',
      'Dressing Assistance',
      'Mobility Support',
      'Grooming',
    ],
    image: '/assets/images/forever.jpg',
    popular: true,
  },
  {
    title: 'Medical Care',
    desc: 'Professional nursing care, medication management, and health monitoring by certified professionals.',
    points: [
      'Medication Management',
      'Vital Signs Monitoring',
      'Wound Care',
      'Chronic Disease Management',
    ],
    image: '/assets/images/assisted.jpg',
    popular: false,
  },
  {
    title: 'Companion Care',
    desc: 'Emotional support, social interaction, and assistance with light household tasks.',
    points: [
      'Social Companionship',
      'Light Housekeeping',
      'Meal Preparation',
      'Errands & Shopping',
    ],
    image: '/assets/images/nursing.jpg',
    popular: true,
  },
];

const TrainingPrograms = () => {
  return (
    <div className="px-6 md:px-20 py-14 bg-gray-50 flex-wrap">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Training Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Training.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative w-full h-60">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              {program.popular && (
                <span className="absolute top-3 right-3 bg-yellow-500 text-xs font-bold text-white px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-blue-700">{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pt-2">
                {program.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;




