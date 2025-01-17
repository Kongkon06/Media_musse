import { motion } from "framer-motion";

export function Brand() {
  const brands = [
    {
      id: 1,
      name: "Fender",
      logo: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02",
      description: "Premium Electric Guitars",
    },
    {
      id: 2,
      name: "Roland",
      logo: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
      description: "Digital Musical Instruments",
    },
    {
      id: 3,
      name: "Gibson",
      logo: "https://images.unsplash.com/photo-1456948927036-ad533e53865c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2lic29ufGVufDB8fDB8fHww",
      description: "Legendary Guitars & More",
    },
    {
      id: 4,
      name: "Yamaha",
      logo: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4",
      description: "Musical Excellence",
    },
  ];

  return (
    <section className="w-full px-3 xs:px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent px-2">
            Our Trusted Brands
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base px-2">
            Partnering with the world's finest musical instrument manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-all duration-300 p-3 xs:p-4 sm:p-6"
            >
              <div className="aspect-square mb-2 xs:mb-3 sm:mb-4 overflow-hidden rounded-md sm:rounded-lg bg-gray-50">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {brand.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  {brand.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-deal-purple/10 to-deal-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}