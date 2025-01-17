import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../Components/Button";
import Footer from '../Components/Footer';
import { Home, Package, ShoppingCart, Store, Tag, Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';

export function Brands() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      if (width >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const brands = [
    {
      id: 1,
      name: "Fender",
      logo: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02",
      description: "Premium Electric & Acoustic Guitars",
      products: 120,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Roland",
      logo: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
      description: "Digital Pianos & Electronic Drums",
      products: 85,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Gibson",
      logo: "https://images.unsplash.com/photo-1619379179326-c50faae88481",
      description: "Legendary Electric Guitars",
      products: 95,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Yamaha",
      logo: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4",
      description: "Comprehensive Musical Instruments",
      products: 150,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Martin",
      logo: "https://images.unsplash.com/photo-1550985616-10810253b84d",
      description: "Premium Acoustic Guitars",
      products: 75,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Pearl",
      logo: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
      description: "Professional Drum Sets",
      products: 60,
      rating: 4.7,
    },
  ];

  const sidebarItems = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Package, label: "Categories", route: "/categories" },
    { icon: Store, label: "Brands", route: "/brands" },
    { icon: Tag, label: "Deals", route: "/deals" },
    { icon: ShoppingCart, label: "Cart", route: "/cart" },
  ];

  const handleNavigate = (route: any) => {
    navigate(route);
    if (!isDesktop) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button - Only show below lg breakpoint */}
      <div className="lg:hidden fixed top-3 sm:top-4 left-3 sm:left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 rounded-full bg-white shadow-md"
        >
          {isSidebarOpen ? (
            <X className="h-5 w-5 text-deal-purple" />
          ) : (
            <Menu className="h-5 w-5 text-deal-purple" />
          )}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar - Always visible on desktop, sliding on mobile */}
        <motion.div
          initial={false}
          animate={{ 
            x: (!isDesktop && !isSidebarOpen) ? -320 : 0,
            opacity: (!isDesktop && !isSidebarOpen) ? 0 : 1
          }}
          transition={{ duration: 0.3 }}
          className={`fixed lg:relative z-40 w-56 sm:w-64 min-h-screen bg-white shadow-md pt-16 sm:pt-20 px-3 sm:px-4
            ${!isDesktop && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}`}
        >
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2 mb-1 sm:mb-2 text-base sm:text-lg font-medium text-gray-700 hover:text-deal-purple hover:bg-deal-purple/10 transition-all duration-300"
              onClick={() => handleNavigate(item.route)}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              {item.label}
            </Button>
          ))}
        </motion.div>

        {/* Overlay - Only show on mobile when sidebar is open */}
        {!isDesktop && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-3 sm:p-6 lg:p-8 pt-14 sm:pt-16 lg:pt-8 lg:ml-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6 lg:mb-8"
          >
            <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
              Featured Brands
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">
              Discover premium musical instruments from world-renowned manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">{brand.name}</h3>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <span>⭐ {brand.rating}</span>
                      <span>•</span>
                      <span>{brand.products} Products</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">{brand.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-deal-purple to-deal-orange hover:opacity-90 text-white text-sm sm:text-base"
                    onClick={() => navigate(`/products/${brand.id}`)}
                  >
                    View Collection
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Brands;