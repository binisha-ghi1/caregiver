// app/navigation/services/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  Bike,
  MapPin,
  IceCreamBowl,
  Dice6,
  BrushCleaning,
  MoveRight,
} from "lucide-react";
import { FaUserNurse } from "react-icons/fa";
import { RiClapperboardLine } from "react-icons/ri";
import TrainingPrograms from "../training/page";
import AdditionalService from "./service-section/page";
import Banner from "../banner/page";

const careServices = [
  {
    icon: Handshake,
    title: "Socialization",
    desc: "Friendship and support for seniors",
  },
  {
    icon: Dice6,
    title: "Medication Management",
    desc: "Scheduled medication assistance",
  },
  {
    icon: FaUserNurse,
    title: "Care Management",
    desc: "Help with overall care coordination",
  },
  {
    icon: RiClapperboardLine,
    title: "Personal Hygiene",
    desc: "Bathing, dressing, grooming",
  },
  {
    icon: Bike,
    title: "Safe Transportation",
    desc: "Rides from home to appointments",
  },
  {
    icon: IceCreamBowl,
    title: "Meal Preparation",
    desc: "Grocery shopping & cooking",
  },
  {
    icon: BrushCleaning,
    title: "Housekeeping Services",
    desc: "Laundry & cleaning tasks",
  },
  {
    icon: MapPin,
    title: "Quick Rides",
    desc: "To different locations or checkups",
  },
];

const Services = () => {
  return (
    <div className="flex-wrap">
      {/* Header Section */}
      <section className="bg-[#daf7f2] px-4 md:px-20 py-14 text-center text-black">
        <h1 className="text-4xl font-bold mb-4">
          Our Care <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive care services designed to help your loved ones maintain
          their independence and quality of life in the comfort of their own
          home.
        </p>
        <Link href="/navigation/contact">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto space-x-2">
            <span>Schedule Consultation</span>
            <MoveRight className="w-5 h-5" />
          </button>
        </Link>
      </section>

      {/* Training Programs */}
      <section className="bg-gray-50 py-14 px-4 md:px-20">
        <TrainingPrograms />
      </section>

      {/* Core Services with Animation (No images here) */}
      <section className="p-4 md:px-20 py-14 bg-white">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Core Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 p-2 rounded-full bg-white text-[#3ec5c5] mb-3 shadow" />
                <h3 className="text-lg font-semibold text-blue-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <AdditionalService />
      <Banner />
    </div>
  );
};

export default Services;
