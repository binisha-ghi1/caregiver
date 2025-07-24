"use client";

import React from "react";
import { GoHeartFill } from "react-icons/go";

const values = [
  {
    icon: GoHeartFill,
    title: "Compassion",
    desc: "We put hearts before procedures",
  },
  {
    icon: GoHeartFill,
    title: "Dignity",
    desc: "Every person deserves respect and care",
  },
  {
    icon: GoHeartFill,
    title: "Excellence",
    desc: "We strive for the highest quality training",
  },
  {
    icon: GoHeartFill,
    title: "Community",
    desc: "Building connections that last",
  },
];

const Values = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 md:px-20 text-center flex-wrap">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <item.icon className="w-14 h-14 text-[#89dfdf] bg-[#e5f2ff] p-3 rounded-full" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
