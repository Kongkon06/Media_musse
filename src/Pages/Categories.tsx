import { useState } from "react";
import { Appbar } from "../Components/Appbar";
import { Card } from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
export function Categories() {
  type CategoryItem = { name: string; image?: string };
  type Categories = {
    Instruments: CategoryItem[];
    SoundandProduction_Software: CategoryItem[];
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
    SoundandProduction_Software: [
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

  // Animation variants
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

  type CategoryKeys = keyof typeof categories;
  const [state, setState] = useState<CategoryKeys>("Instruments");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
      <Appbar />
      <div className="flex min-h-[calc(100vh-4rem)] pt-16">
        {/* Sidebar Navigation */}
        <div className="w-1/5 bg-white/80 backdrop-blur-md shadow-lg">
          <div className="flex flex-col gap-2 p-6 pt-20">
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
                  <span className="text-base">
                    {category.replace(/_/g, " ")}
                  </span>
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
        <div className="w-4/5 px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
              {state.replace(/_/g, " ")}
            </h1>
            <p className="text-gray-600 mt-2">
              Explore our collection of {state.toLowerCase().replace(/_/g, " ")}
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categories[state].map((categoryItem, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
              >
                <Card
                  onClick={() => navigate(`/products/${categoryItem.name}`)}
                  className="group relative overflow-hidden rounded-xl shadow-lg h-64 transition-all duration-300 hover:shadow-xl"
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
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {categoryItem.name}
                    </h3>
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center text-sm text-white">
                        Explore Products
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}