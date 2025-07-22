import React from 'react';
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Inbox,
  Clock,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 px-6 md:px-16 flex-wrap">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-10 border-b border-gray-700">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">CareHeart</h2>
          <p className="text-gray-300">
            Providing compassionate, professional healthcare services for over 15 years.
            Your family's wellbeing is our highest priority.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <ShieldCheck className="text-green-400 w-5 h-5" />
            <p>Licensed & Insured</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Award className="text-yellow-400 w-5 h-5" />
            <p>Accredited Care</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold mb-2">Our Services</h2>
          {[
            'Personal Care',
            'Medical Support',
            'Companion Care',
            'Memory Care',
            'Respite Care',
            'Emergency Care',
          ].map((service, i) => (
            <p
              key={i}
              className="text-gray-300 hover:text-white cursor-pointer transition"
            >
              {service}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
          <div className="flex items-start gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <p>
              123 CareHeart <br />
              Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <Phone className="w-5 h-5 text-blue-400 mt-1" />
            <p>
              (555) 123-4567 <br />
              24/7 Emergency Line
            </p>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <Inbox className="w-5 h-5 text-blue-400 mt-1" />
            <p>care@carefirst.com</p>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <Clock className="w-5 h-5 text-blue-400 mt-1" />
            <p>
              Office Hours <br />
              Sun–Fri: 8AM–10PM <br />
              Emergency: 24/7
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Info */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-xs text-gray-400 py-6 text-center">
        <p>© 2025 CareHeart. All rights reserved.</p>
        <p>Licensed Healthcare Provider #HC-12345</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:underline cursor-pointer">Terms of Service</p>
        <p className="hover:underline cursor-pointer">Accessibility</p>
        <p className="hover:underline cursor-pointer">Licensing</p>
      </div>
    </footer>
  );
};

export default Footer;



