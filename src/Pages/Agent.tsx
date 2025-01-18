import { useRecoilValue } from "recoil";
import { Appbar } from "@/Components/Appbar";
import { SearchBar } from "@/Components/SearchBar";
import { StoreCard } from "@/Components/StoreCard";
import { randomstores } from "@/States/Atom";
import Footer from "@/Components/Footer";
import { Store, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Store {
  id: number;
  name: string;
  address: string;
  src: string;
}

export function Agent() {
  const stores = useRecoilValue(randomstores);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
      <Appbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-24 md:pt-32"
      >
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
            Find Our Stores Near You
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-lg md:text-xl">
            <span>We are</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-400/10 rounded-full text-green-600 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              available
            </div>
            <span>in most parts of India</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
          <SearchBar />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mt-12 mb-16"> {/* md:grid-cols-4 for future use */}
          {[
            { icon: Store, label: "Stores", value: "500+" },
            { icon: MapPin, label: "Cities", value: "100+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-deal-purple" />
              <div className="font-bold text-xl md:text-2xl text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stores Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 pb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Stores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No stores available currently.</p>
            </div>
          ) : (
            stores.map((item: Store) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <StoreCard
                  name={item.name}
                  address={item.address}
                  src={item.src}
                />
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}