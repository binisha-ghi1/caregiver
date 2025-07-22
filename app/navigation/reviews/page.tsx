'use client';

import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
  {
    image: '/assets/images/sara.jpg',
    text: "CareHeart has been a blessing for our family. The caregivers are not only professional but also genuinely care about the well-being of my mother.",
    author: "Sarah J.",
    relation: "Daughter of Resident",
    rating: 5,
  },
  {
    image: '/assets/images/mark.jpg',
    text: "The staff at LiveCare are exceptional. They treat my father with dignity and respect. Thank you for your wonderful service!",
    author: "Mark T.",
    relation: "Son of Resident",
    rating: 4,
  },
  {
    image: '/assets/images/emily.jpg',
    text: "I can't express how grateful I am. The caregivers are attentive and always go the extra mile to ensure she is comfortable and happy.",
    author: "Emily R.",
    relation: "Granddaughter of Resident",
    rating: 5,
  },
  {
    image: '/assets/images/john.jpg',
    text: "Choosing CareHeart was the best decision. The team is professional, kind, and always available to address any concerns.",
    author: "John D.",
    relation: "Son of Resident",
    rating: 5,
  },
  {
    image: '/assets/images/lisa.jpg',
    text: "CareHeart has provided my father with the support he needs. The caregivers are attentive and treat him like family.",
    author: "Lisa M.",
    relation: "Daughter of Resident",
    rating: 4,
  },
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -width : width,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-gray-50 px-6 md:px-20 py-14 text-center flex-wrap">
      <h2 className="text-4xl font-bold text-black mb-2">What Our Clients Say</h2>
      <p className="text-gray-600 mb-10">Read the experiences of our satisfied clients and their families.</p>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="text-[#3ec5c5]" />
        </button>

       
        <div
          ref={scrollRef}
          className="flex overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-200 mx-2 min-w-[300px] max-w-[300px] flex-shrink-0 text-left space-y-3"
            >
              <img
                src={review.image}
                alt={review.author}
                className="w-14 h-14 rounded-full object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 line-clamp-4">"{review.text}"</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center font-medium">
                - {review.author}, <span className="italic">{review.relation}</span>
              </p>
            </div>
          ))}
        </div>

        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
        >
          <ArrowRight className="text-[#3ec5c5]" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;





