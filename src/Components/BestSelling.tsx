import { Button } from "./Button";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { userCart } from "@/States/Atom";

export function BestSelling() {
  const [cart, setCart] = useRecoilState(userCart);
  const bestSellers = [
    {
      id: 1,
      name: "Fender Stratocaster",
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f",
      price: 1499,
      originalPrice: 1899,
    },
    {
      id: 2,
      name: "Roland Digital Piano",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
      price: 899,
      originalPrice: 1199,
    },
    {
      id: 3,
      name: "Gibson Les Paul",
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d",
      price: 2499,
      originalPrice: 2899,
    },
    {
      id: 4,
      name: "Yamaha Acoustic",
      image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd",
      price: 699,
      originalPrice: 899,
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
            Best Selling Instruments
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
            Our most popular picks this week
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-deal-purple font-bold text-sm sm:text-base">
                    Rs {item.price}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    Rs {item.originalPrice}
                  </span>
                </div>
                <Button 
                  onClick={() => {setCart(cart + 1)}}
                  className="w-full mt-2 sm:mt-4 bg-gradient-to-r from-deal-purple to-deal-orange hover:opacity-90 transition-opacity text-sm sm:text-base py-1.5 sm:py-2"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="absolute top-2 right-2 bg-deal-orange text-white text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                Save Rs {item.originalPrice - item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}