import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-6 px-3 sm:py-8 sm:px-4 lg:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Quick Links Section */}
          <div className="flex flex-col items-center xs:items-start space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-deal-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:xs:left-0 after:-translate-x-1/2 after:xs:translate-x-0 after:w-12 after:h-0.5 after:bg-deal-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-center xs:text-left">
              <li>
                <a href="#" className="hover:text-deal-heading transition-colors duration-300 text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deal-heading transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deal-heading transition-colors duration-300 text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-deal-heading transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center xs:items-start space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-deal-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:xs:left-0 after:-translate-x-1/2 after:xs:translate-x-0 after:w-12 after:h-0.5 after:bg-deal-heading">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-center justify-center xs:justify-start gap-2 group">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-deal-heading group-hover:animate-bounce" />
                <p>123 Music Avenue</p>
              </div>
              <div className="flex items-center justify-center xs:justify-start gap-2 group">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-deal-heading group-hover:animate-bounce" />
                <p>City, State, 12345</p>
              </div>
              <div className="flex items-center justify-center xs:justify-start gap-2 group">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-deal-heading group-hover:animate-bounce" />
                <p>info@musicalstore.com</p>
              </div>
              <div className="flex items-center justify-center xs:justify-start gap-2 group">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-deal-heading group-hover:animate-bounce" />
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center xs:items-start space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-deal-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:xs:left-0 after:-translate-x-1/2 after:xs:translate-x-0 after:w-12 after:h-0.5 after:bg-deal-heading">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="hover:text-deal-heading transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="#" 
                className="hover:text-deal-heading transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="#" 
                className="hover:text-deal-heading transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Musical Instruments Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;