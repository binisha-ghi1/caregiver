import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center bg-gradient-to-r from-[#0c7973] to-[#47caca] text-white px-6 py-16 space-y-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">
        Ready t o Start Your Healthcare Career?
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Join our next cohort and take the first step towards a rewarding career
        in healthcare.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-white text-[#3ec5c5] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Schedule a Tour
        </button>
        <button className="bg-white text-[#3ec5c5] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Banner;
