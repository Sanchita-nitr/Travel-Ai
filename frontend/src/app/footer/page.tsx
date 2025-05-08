// Footer.jsx
"use client";
import { ChevronUp, CreditCard, Facebook, Globe, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [expanded, setExpanded] = useState({
    company: false,
    support: false,
    destinations: false,
    legal: false,
  });

interface ExpandedState {
    company: boolean;
    support: boolean;
    destinations: boolean;
    legal: boolean;
}

const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email && email.includes("@")) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 5000);
    }
};

const toggleSection = (section: keyof ExpandedState): void => {
    setExpanded((prev: ExpandedState) => ({
        ...prev,
        [section]: !prev[section]
    }));
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-sky-950 text-white">
      {/* Pre-footer banner */}
     

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="text-sky-400 mr-2" size={28} />
              <h2 className="text-2xl font-bold">GlobeTide</h2>
            </div>
            <p className="text-sky-400 mb-6">
            Unlock powerful insights, streamline conversations, and deliver exceptional customer experiences with CallVista’s expert call analytics solutions. 
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-sky-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-sky-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-sky-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-sky-800 p-2 rounded-full hover:bg-sky-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div className="flex items-center mb-3">
              <MapPin className="text-sky-400 mr-2" size={18} />
              <p className="text-sky-400">NIT Rourkela, Odisha</p>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="text-sky-400 mr-2" size={18} />
              <p className="text-sky-400">+91 (123456789)</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-sky-400 mr-2" size={18} />
              <p className="text-sky-400">info@travelease.com</p>
            </div>
          </div>

          {/* Mobile accordion sections */}
          <div className="lg:hidden col-span-1 md:col-span-2">
            {/* Company section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('company')}
              >
                <h3 className="font-bold text-lg">Company</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.company ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.company ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">About Us</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Our Team</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Careers</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Blog</a></p>
              </div>
            </div>

            {/* Support section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('support')}
              >
                <h3 className="font-bold text-lg">Support</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.support ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.support ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Contact Us</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">FAQs</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Support Center</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Travel Insurance</a></p>
              </div>
            </div>

           

            {/* Legal section */}
            <div className="border-b border-sky-700 pb-2 mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('legal')}
              >
                <h3 className="font-bold text-lg">Legal</h3>
                <ChevronUp 
                  size={18} 
                  className={`transition-transform ${expanded.legal ? '' : 'transform rotate-180'}`} 
                />
              </div>
              <div className={`mt-4 space-y-3 ${expanded.legal ? 'block' : 'hidden'}`}>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Terms & Conditions</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Privacy Policy</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Cookie Policy</a></p>
                <p><a href="#" className="text-sky-400 hover:text-white transition-colors">Licenses</a></p>
              </div>
            </div>
          </div>

          {/* Desktop columns */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/aboutus" className="text-sky-400 hover:text-white transition-colors">About Us</a></li>
              
              <li><a href="careers" className="text-sky-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-sky-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sky-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sky-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sky-400 hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>


          {/* Newsletter subscription */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-sky-400 mb-4">Stay updated with our latest offers, travel tips, and exclusive deals.</p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="bg-sky-800 rounded-l-md px-4 py-2 flex-grow text-white"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-sky-600 hover:bg-sky-700 rounded-r-md px-4 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-yellow-400  text-sm mt-2">Thank you for subscribing!</p>
              )}
            </form>
            <div>
              <h3 className="font-bold text-lg mb-4">We Accept</h3>
              <div className="flex space-x-3">
                <div className="bg-sky-800 p-2 rounded">
                  <CreditCard size={24} className="text-sky-200" />
                </div>
                <div className="bg-sky-800 p-2 rounded flex items-center justify-center">
                  <span className="font-bold text-sky-200">VISA</span>
                </div>
                <div className="bg-sky-800 p-2 rounded flex items-center justify-center">
                  <span className="font-bold text-red-400">MC</span>
                </div>
                <div className="bg-sky-800 p-2 rounded flex items-center justify-center">
                  <span className="font-bold text-sky-200">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-sky-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sky-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sky-500 text-sm hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sky-500 text-sm hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sky-500 text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-colors z-50"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;