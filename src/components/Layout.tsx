import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation */}
      <nav className="bg-[#242424] border-b border-[#D4AF37]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm sm:text-base">Gold Price Calculator</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <Link to="/" className="text-[#D4AF37] hover:text-[#C4A137]">Home</Link>
              <Link to="/about" className="text-[#D4AF37] hover:text-[#C4A137]">About</Link>
              <Link to="/faq" className="text-[#D4AF37] hover:text-[#C4A137]">FAQ</Link>
              <Link to="/contact" className="text-[#D4AF37] hover:text-[#C4A137]">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#D4AF37] p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#242424] border-t border-[#D4AF37]/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-[#D4AF37] hover:text-[#C4A137] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-[#D4AF37] hover:text-[#C4A137] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/faq" 
                  className="text-[#D4AF37] hover:text-[#C4A137] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact" 
                  className="text-[#D4AF37] hover:text-[#C4A137] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-[#D4AF37] text-[#1A1A1A] mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="font-bold mb-4">About Gold Price Calculator</h3>
              <p>Get accurate, real-time gold prices and calculate the value of your gold items instantly.</p>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            <p>&copy; 2024 goldpricepergram9ct.com - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;