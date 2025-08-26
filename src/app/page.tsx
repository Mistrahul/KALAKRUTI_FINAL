'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HomePage from './components/HomePage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingCall from './components/FloatingCall';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensure canonical tag exists
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
  }, []);

  // Handle navigation from components (router-based)
  const handleNavigation = (page: string) => {
    const pageUrls: Record<string, string> = {
      home: '/',
      services: '/services',
      portfolio: '/portfolio',
      about: '/about-kalakruti-associates-interior-designers-bhubaneswar',
      blog: '/interior-design-blog-bhubaneswar',
      faq: '/frequently-asked-questions',
      contact: '/contact'
    };
    const target = pageUrls[page] || '/';
    setIsMenuOpen(false);
    router.push(target);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation now moved to global Navbar in layout */}

      {/* Main Content Area */}
      <main>
        <HomePage handleNavigation={handleNavigation} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Kalakruti Associates
              </h3>
              <p className="text-gray-300 mb-4">
                Premier interior design services in Bhubaneswar, creating beautiful and functional spaces since inception.
              </p>
              <p className="text-sm text-gray-400 italic">
                ଆପଣଙ୍କ ସ୍ବପ୍ନର ଘର, ଆମର କଳାକୃତି
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Residential Interior Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Commercial Interior Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Modular Kitchen Design</button></li>
                <li><button onClick={() => handleNavigation('services')} className="hover:text-orange-500 transition-colors text-left">Vastu Consultation</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Areas Served</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Bhubaneswar</li>
                <li>Cuttack</li>
                <li>Puri</li>
                <li>Across Odisha</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Design Plaza, Saheed Nagar</p>
                <p>Bhubaneswar, Odisha 751007</p>
                <p>Phone: <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors">+91-98765-43210</a></p>
                <p>Email: info@kalakrutiassociates.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-1 max-w-md mx-auto md:mx-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => handleNavigation('blog')} className="hover:text-orange-500 transition-colors text-left">Blog</button></li>
                <li><button onClick={() => handleNavigation('faq')} className="hover:text-orange-500 transition-colors text-left">FAQ</button></li>
                <li><a href="/testimonials" className="hover:text-orange-500 transition-colors">Reviews</a></li>
                <li><a href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><button onClick={() => handleNavigation('about')} className="hover:text-orange-500 transition-colors text-left">About Us</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kalakruti Associates. All rights reserved. | Best Interior Designer in Bhubaneswar</p>
          </div>
        </div>
      </footer>

      {/* Global Floating Action Buttons */}
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );

}

export default App;