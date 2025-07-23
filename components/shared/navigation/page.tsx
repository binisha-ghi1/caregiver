'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, HeartHandshake, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/navigation/Services' },
    { label: 'Gallery', href: '/navigation/gallery' },
    { label: 'About', href: '/navigation/about' },
    { label: 'Contact', href: '/navigation/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black font-semibold px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">SBI</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-blue-800 transition relative pb-1 ${
                pathname === item.href ? 'text-blue-800 border-b-2 border-blue-800' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section (Phone & Emergency) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="text-blue-800 w-4 h-4" />
            <p>(555) 123-4567</p>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="text-blue-800 w-4 h-4" />
            <p>24/7 Emergency Care</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-4 py-2 text-sm ${
                pathname === item.href ? 'text-blue-800 underline' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 pt-4 border-t text-sm space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-800 w-4 h-4" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="text-blue-800 w-4 h-4" />
              <p>24/7 Emergency Care</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



