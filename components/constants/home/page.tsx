'use client';
import React from 'react';
import {
  MoveRight,
  UsersRound,
  ShieldPlus,
  Award,
  Clock4,
  Heart,
} from 'lucide-react';
import { GoHeartFill } from 'react-icons/go';
import TrainingPrograms from '@/app/navigation/training/page';
import Banner from '@/app/navigation/banner/page';
import Link from 'next/link';
import Reviews from '@/app/navigation/reviews/page';
import Values from '@/app/navigation/values/page';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col  lg:flex-row justify-between items-center bg-[#f0f9fb] text-black px-6 py-12 md:px-12 lg:px-20 gap-10">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 w-full lg:w-1/2">
          {/* Top Badge */}
          <p className="text-blue-500 font-semibold bg-[#dbf3f4] w-fit rounded-full px-4 py-2 shadow-md flex items-center space-x-2">
            <GoHeartFill className="w-5 h-5 text-red-600" />
            <span>Caring Hearts, Professional Hands</span>
          </p>

          {/* Main Heading */}
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Where <br />
            <span className="text-[#89dfdf]">Compassion</span> <br />
            Meets Excellence
          </h1>

          {/* Subheading */}
          <p className="text-gray-500 text-lg md:text-xl">
            From personal care to medical support, we provide a full range of services to meet
            your family's unique needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/navigation/contact"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <MoveRight className="w-5 h-5" />
            </Link>

            <Link
              href="/navigation/Services"
              className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <span>Learn About Our Services</span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { icon: UsersRound, title: '1000+', desc: 'Family Served' },
              { icon: ShieldPlus, title: '24/7', desc: 'Emergency Care' },
              { icon: Award, title: '15+', desc: 'Years Experience' },
              { icon: Clock4, title: '100%', desc: 'Licensed Staff' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 text-center">
                <Icon className="bg-blue-100 p-2 rounded-2xl w-10 h-10 text-blue-700" />
                <p className="text-gray-700 text-sm">
                  <span className="font-bold text-black text-lg">{title}</span>
                  <br />
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 max-w-xl">
          <img
            src="/assets/images/main.jpg"
            alt="Healthcare at Home"
            className="h-[60vh] md:h-[80vh] w-full object-cover rounded-xl"
          />

          {/* Bottom-left overlay badge */}
          <div className="absolute -bottom-5 left-2 bg-white text-black px-4 py-3 rounded-lg shadow-lg max-w-xs space-y-1 flex flex-col">
            <div className="flex items-center space-x-2">
              <Award className="bg-[#e5f2ff] text-[#0081ff] p-1 rounded-full" size={24} />
              <h1 className="text-lg font-semibold">Nationally Accredited</h1>
            </div>
            <p className="text-gray-500 text-sm pl-7">State Board Approved</p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="flex flex-col items-center justify-center bg-white text-black p-10 space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Our Core Values</h1>
        <p className="text-lg md:text-xl">
          Everything we do is guided by these fundamental beliefs that shape our approach
          to caregiving.
        </p>
      </div>

      <Values />

      {/* Services Intro Section */}
      <div className="flex flex-col items-center justify-center bg-white text-black p-10 space-y-4 text-center">
        <h1 className="font-bold text-3xl md:text-4xl">Comprehensive Care Services</h1>
        <p className="text-lg md:text-xl text-gray-500">
          From personal care to medical support, we provide a full range of services to meet
          your family's unique needs.
        </p>
      </div>

      {/* Training Programs */}
      <TrainingPrograms />

      {/* CTA Button */}
      <div className="py-8 bg-gray-50 text-center">
        <Link href="/navigation/Services">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Services</span>
            <MoveRight className="w-5 h-5" />
          </button>
        </Link>
      </div>

      <Reviews />

      {/* Banner Section */}
      <Banner />
    </>
  );
};

export default Home;


