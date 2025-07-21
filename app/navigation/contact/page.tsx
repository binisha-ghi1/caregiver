'use client';

import React from 'react';
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      {/* Contact Heading Section */}
      <section className="bg-[#e6f7f7] py-16 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Contact <span className="text-blue-600">CareHeart</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Ready to start your care journey? We're here to answer your questions and <br className="hidden md:block" />
            create a personalized care plan that meets your unique needs.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Form */}
          <div className="bg-[#f9f9f9] p-10 rounded-xl shadow-md flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-8 text-blue-600 gap-3">
                <FaEnvelope className="text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
              </div>

             <form className="space-y-6">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-6">
    <div className="flex-1">
      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] placeholder-gray-500"
      />
    </div>
    <div className="flex-1">
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] placeholder-gray-500"
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col md:flex-row gap-6">
    <div className="flex-1">
      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
      <input
        type="tel"
        placeholder="(555) 123-4567"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] placeholder-gray-500"
      />
    </div>
    <div className="flex-1">
      <label className="block text-gray-700 font-medium mb-2">Service Needed</label>
      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] text-gray-700">
        <option value="">Select a service</option>
        <option value="medical">Medical Care</option>
        <option value="companion">Companion Care</option>
        <option value="meal preparation">Meal Preparation</option>
        <option value="transportation">Transportation</option>
        <option value="housekeeping">Housekeeping</option>
        <option value="others">Others</option>
      </select>
    </div>
  </div>

  {/* Timeline */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">How Soon Do You Need Service?</label>
    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] text-gray-700">
      <option value="">Select timeframe</option>
      <option value="immediate">Immediately</option>
      <option value="week">Within a week</option>
      <option value="month">Within a month</option>
      <option value="planning">Just planning ahead</option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">Message</label>
    <textarea
      rows={5}
      placeholder="Tell us about your care needs, questions, or any specific requirements..."
      className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#3ec5c5] placeholder-gray-500"
    ></textarea>
  </div>

  {/* Submit */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-[#3ec5c5] hover:bg-[#2fa8a8] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition duration-300"
    >
      <FaPaperPlane className="text-white" />
      Send Message
    </button>
  </div>
</form>
            </div>
          </div>

          {/* Get in Touch Info */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
              <p className="text-gray-700 mt-2">
                We're available 24/7 for care services and our office team is ready to help you during business hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 bg-[#f5f9ff] p-5 rounded-lg shadow-sm">
                <FaPhoneAlt className="text-2xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-blue-600 font-medium">(555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Call us anytime for immediate assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-[#f5f9ff] p-5 rounded-lg shadow-sm">
                <FaEnvelope className="text-2xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-blue-600 font-medium">info@careheart.com</p>
                  <p className="text-gray-600 text-sm">Send us a message and we'll respond quickly</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-[#f5f9ff] p-5 rounded-lg shadow-sm">
                <FaMapMarkerAlt className="text-2xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Address</h3>
                  <p className="text-blue-600 font-medium">123 Care Street, Wellness City, WC 12345</p>
                  <p className="text-gray-600 text-sm">Visit our office during business hours</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-[#f5f9ff] p-5 rounded-lg shadow-sm">
                <FaClock className="text-2xl text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Hours</h3>
                  <p className="text-blue-600 font-medium">24/7 Care Available</p>
                  <p className="text-gray-600 text-sm">Office: Mon-Fri 8AM - 6PM</p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex items-start gap-4 bg-[#ffe5e5] p-5 rounded-lg shadow-sm">
                <FaPhoneAlt className="text-2xl text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Emergency Contact</h3>
                  <p className="text-red-600 font-medium">(555) 911-CARE</p>
                  <p className="text-gray-600 text-sm">For urgent care needs outside of business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="bg-[#f0faff] py-16 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center text-blue-600 text-4xl">
            <FaRegCalendarAlt />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Schedule a Free Consultation</h2>
          <p className="text-gray-600 text-lg">
            Meet with our care coordinators to discuss your needs and create a personalized care plan. <br className="hidden md:block" />
            No obligation, just honest guidance to help you make the best decisions.
          </p>
          <Link href="/navigation/contact">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 mx-auto">
              <span>Schedule Now</span>
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;










