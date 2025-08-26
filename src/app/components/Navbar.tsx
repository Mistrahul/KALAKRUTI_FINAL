'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Kalakruti Associates
            </h2>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Portfolio</Link>
              <Link href="/interior-design-blog-bhubaneswar" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
              <Link href="/frequently-asked-questions" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/about-kalakruti-associates-interior-designers-bhubaneswar" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-500 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Services</Link>
            <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Portfolio</Link>
            <Link href="/interior-design-blog-bhubaneswar" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Blog</Link>
            <Link href="/frequently-asked-questions" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">FAQ</Link>
            <Link href="/about-kalakruti-associates-interior-designers-bhubaneswar" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors w-full text-left">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}


