// Hero.js
import { Button } from "./Button";
import { motion } from "framer-motion";

export function Hero() {
    return (
<section className="w-full px-6 py-12 bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {/* Main Hero (3/5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 h-[60vh] relative overflow-hidden rounded-2xl bg-gradient-to-br from-deal-purple to-deal-orange p-1"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d')] bg-cover bg-center opacity-20" />
            <div className="relative h-full bg-black/40 backdrop-blur-sm p-8 flex flex-col justify-center items-start rounded-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Discover Your Sound
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Explore our curated collection of premium musical instruments. From classic guitars to modern synthesizers, find the perfect instrument to express your creativity.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-deal-purple hover:bg-gray-100">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
          </motion.div>
  
          {/* Sub Heroes (2/5) */}
         <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {/* Featured Deals */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 bg-gradient-to-r from-deal-purple/90 to-deal-purple p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3 text-white">Flash Sale 🔥</h2>
            <p className="text-gray-200 mb-4">Up to 40% off on premium instruments</p>
            <Button variant="ghost" className="w-full  hover:bg-white/20">View Deals</Button>
          </motion.div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
          >
            <h2 className="text-xl font-bold mb-2 text-deal-purple">Guitars</h2>
            <p className="text-gray-600 mb-4">Acoustic & Electric</p>
            <Button variant="ghost" className="w-full hover:bg-deal-purple/20">Explore</Button>
          </motion.div>

          {/* New Arrivals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
          >
            <h2 className="text-xl font-bold mb-2 text-deal-orange">Digital</h2>
            <p className="text-gray-600 mb-4">MIDI & Synths</p>
            <Button variant="ghost" className="w-full hover:bg-deal-orange/20">Explore</Button>
          </motion.div>

          {/* Pro Audio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-2 bg-gradient-to-r from-deal-orange/90 to-deal-orange p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3 text-white">Pro Audio 🎧</h2>
            <p className="text-gray-200 mb-4">Professional recording equipment</p>
            <Button variant="ghost" className="w-full  hover:bg-white/20">Shop Now</Button>
          </motion.div>
        </div>
    </div>
</section>
    );
  }