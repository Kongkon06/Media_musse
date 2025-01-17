import { useState } from "react";
import Footer from '../Components/Footer';
import { Card } from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home, Menu, Package, ShoppingCart, Store, Tag } from "lucide-react";
import { Button } from '../Components/Button';
import { Sheet, SheetContent, SheetTrigger } from "../Components/ui/sheet";

export function Categories() {
  type CategoryItem = { name: string; image?: string };
  type Categories = {
    Instruments: CategoryItem[];
    Sound_and_Production_Software: CategoryItem[];
    Audio_Equipment: CategoryItem[];
    Accessories: CategoryItem[];
    Sheet_MusicandBooks: CategoryItem[];
  };

  const categories: Categories = {
    Instruments: [
      { name: "Guitar", image: "/guitar.jpg" },
      { name: "Keyboard", image: "/keyboard.jpg" },
      { name: "Piano", image: "/piano.jpg" },
      { name: "Drums", image: "/drums.jpg" },
      { name: "Percussion", image: "/precussion.jpg" },
    ],
    Sound_and_Production_Software: [
      { name: "Digital Audio Workstations (DAWs)", image: "/digital.jpg" },
      { name: "VST Plugins & Effects", image: "/plugin.jpg" },
      { name: "Loop Libraries" },
    ],
    Audio_Equipment: [
      { name: "Microphones", image: "/microphone.jpg" },
      { name: "Audio Interfaces", image: "/audio.jpg" },
      { name: "Studio Interfaces", image: "/studio.jpg" },
      { name: "Studio Monitors" },
    ],
    Accessories: [
      { name: "Guitar Picks", image: "/picks.jpg" },
      { name: "Stand & Mounts" },
      { name: "Tuners & Metronome" },
      { name: "Cases & Bags" },
      { name: "Cables & Connectors" },
      { name: "Straps", image: "/straps.jpg" },
    ],
    Sheet_MusicandBooks: [
      { name: "Music Sheets (for different instruments)", image: "/music_sheets.jpg" },
      { name: "Music Theory Books" },
      { name: "Music Education (method books)" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const sidebarItems = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Package, label: "Categories", route: "/categories" },
    { icon: Store, label: "Brands", route: "/brands" },
    { icon: Tag, label: "Deals", route: "/deals" },
    { icon: ShoppingCart, label: "Cart", route: "/cart" },
  ];
  
  type CategoryKeys = keyof typeof categories;
  const [state, setState] = useState<CategoryKeys>("Instruments");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
      <div className="lg:hidden fixed top-4 left-4 z-50 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full backdrop-blur-sm shadow-md">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-deal-purple" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 pt-16 px-4 sm:pt-20 sm:px-6">
            <div className="flex flex-col space-y-1 sm:space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start gap-2 mb-1 sm:mb-2 text-base sm:text-lg font-medium text-gray-700 hover:text-deal-purple hover:bg-deal-purple/10 transition-all duration-300"
                  onClick={() => navigate(item.route)}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Category Selector */}
        <div className="lg:hidden px-3 sm:px-4 pt-16 sm:pt-20">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-md flex items-center justify-between"
          >
            <span className="text-base sm:text-lg font-medium">
              {state.replace(/_/g, " ")}
            </span>
            <ChevronRight
              className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          
          {/* Mobile Category Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-40 left-0 right-0 mt-1 sm:mt-2 mx-3 sm:mx-4 bg-white rounded-lg shadow-xl"
            >
              {Object.keys(categories).map((category) => (
                <motion.div
                  key={category}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => {
                      setState(category as CategoryKeys);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 ${
                      state === category
                        ? "bg-gradient-to-r from-deal-purple to-deal-orange text-white font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm sm:text-base">
                      {category.replace(/_/g, " ")}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Sidebar Navigation - Desktop */}
        <div className="hidden lg:block lg:w-1/5 bg-white/80 backdrop-blur-md shadow-lg h-screen sticky top-0">
          <div className="flex flex-col gap-2 p-6 pt-20 overflow-y-auto max-h-screen">
            {Object.keys(categories).map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => setState(category as CategoryKeys)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between group transition-all duration-300 ${
                    state === category
                      ? "bg-gradient-to-r from-deal-purple to-deal-orange text-white font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{category.replace(/_/g, " ")}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      state === category ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5 px-3 sm:px-4 lg:px-8 pt-6 sm:pt-8 lg:pt-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
              {state.replace(/_/g, " ")}
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">
              Explore our collection of {state.toLowerCase().replace(/_/g, " ")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {categories[state].map((categoryItem, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
              >
                <Card
                  onClick={() => navigate(`/products/${categoryItem.name}`)}
                  className="group relative overflow-hidden rounded-xl shadow-lg h-40 sm:h-48 lg:h-64 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  {categoryItem.image && (
                    <img
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      src={categoryItem.image}
                      alt={categoryItem.name}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full flex flex-col justify-end p-3 sm:p-4 lg:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
                      {categoryItem.name}
                    </h3>
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center text-xs sm:text-sm text-white">
                        Explore Products
                        <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}