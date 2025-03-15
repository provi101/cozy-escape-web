
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-homestay-green text-white pt-12 pb-6 rounded-t-3xl mt-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-display font-bold mb-4">
              <span className="text-homestay-sand">Alana</span> Stay
            </h2>
            <p className="text-homestay-cream/80 text-center md:text-left">
              Experience the warmth and comfort of home away from home.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-homestay-sand transition-colors">Home</Link>
              <Link to="/rooms" className="hover:text-homestay-sand transition-colors">Rooms</Link>
              <Link to="/gallery" className="hover:text-homestay-sand transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-homestay-sand transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-display font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <a href="tel:8431534435" className="flex items-center hover:text-homestay-sand transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>8431534435</span>
                </a>
                <a href="tel:9448819406" className="flex items-center hover:text-homestay-sand transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>94488 19406</span>
                </a>
              </div>
              <a href="mailto:info@alanastay.com" className="flex items-center hover:text-homestay-sand transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@alanastay.com</span>
              </a>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                <span>Alana Stay, banglore, Karnataka, India</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Proprietor: </span>
                <span className="ml-2">sohan Dsouza</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-homestay-cream/70">
            &copy; {new Date().getFullYear()} Alana Stay Homestay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
