"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Values from "../values/page";
import { FaHome, FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import Banner from "../banner/page";

// Highlights under Core Values
const ValueHighlights = [
  {
    icon: FaHome,
    title: "Home-Like Environment",
    color: "#ffb703",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Small Class Size",
    color: "#fb8500",
  },
  {
    icon: FaUserFriends,
    title: "Personal Mentorship",
    color: "#219ebc",
  },
];

const About = () => {
  return (
    <>
      {/* About Banner */}
      <section className="bg-[#daf7f2] py-16 px-6 md:px-20 text-center flex-wrap">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-[#3ec5c5]">CareHeart</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Dedicated to providing exceptional, compassionate care that allows
            your loved ones to <br className="hidden md:block" />
            live comfortably and safely in the place they call home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white justify-between gap-10 px-6 md:px-20 py-16">
        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At CareHeart, we believe that everyone deserves to age with dignity,
            comfort, and independence. Our mission is to provide personalized,
            professional care services that enhance quality of life while giving
            families peace of mind.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded in 2014, we've grown from a small local service to a trusted
            care provider, always maintaining our core values of compassion,
            respect, and excellence in everything we do.
          </p>

          <Link href="/navigation/Services">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto lg:mx-0 space-x-2">
              <span>Explore Our Services</span>
              <MoveRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/images/mission.jpg"
            alt="Our Mission"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Core Values Section from separate component */}
      <Values />

      {/* Highlight Icons Below Core Values */}
      <section className="flex flex-col md:flex-row justify-center items-center bg-white py-12 gap-8">
        {ValueHighlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 max-w-xs"
          >
            <item.icon
              className="w-12 h-12 mb-3"
              style={{ color: item.color }}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </section>
      <Banner />
    </>
  );
};

export default About;
