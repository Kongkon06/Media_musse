import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../Components/Button";
import { Home, Package, Store, Tag } from "lucide-react";

export function Brands() {
  const navigate = useNavigate();

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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     {/* <Appbar /> */}
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 min-h-[calc(100vh-4rem)] bg-white shadow-md pt-20 px-4"
        >
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2 mb-2 text-lg font-medium text-gray-700 hover:text-deal-purple hover:bg-deal-purple/10 transition-all duration-300"
              onClick={() => navigate(item.route)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
              Featured Brands
            </h1>
            <p className="text-gray-600 mt-2">
              Discover premium musical instruments from world-renowned manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span>⭐ {brand.rating}</span>
                      <span>•</span>
                      <span>{brand.products} Products</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-deal-purple to-deal-orange hover:opacity-90 text-white"
                    onClick={() => navigate(`/brands/${brand.id}`)}
                  >
                    View Collection
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}