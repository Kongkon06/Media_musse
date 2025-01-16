import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
//import { Appbar } from '../Components/Appbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { Home, Package, Store, Tag } from "lucide-react";
import { Button } from '../Components/Button';
import { Card } from '../Components/Card';
import { useRecoilState } from "recoil";
import { userCart } from "@/States/Atom";
export const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const product = {
    name: "Fender Stratocaster",
    price: 1499.99,
    description: "The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Stratocaster is a versatile guitar that has been used in many genres including rock, pop, soul, blues, and more.",
    sizes: ['Blue', 'Red', 'Black', 'Off white'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    rating: 4.5,
    reviews: 128,
    images: [
      "/guitar.jpg",
      "/guitar.jpg",
      "/guitar.jpg",
    ]
  };
  const handleAddToCart = () => {
    setCart(cart + 1)
  };
  const sidebarItems = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Package, label: "Categories", route: "/categories" },
    { icon: Store, label: "Brands", route: "/brands" },
    { icon: Tag, label: "Deals", route: "/deals" },
    { icon: ShoppingCart, label: "Cart", route: "/cart" },
  ];
  const navigate = useNavigate();
  const [cart,setCart] = useRecoilState(userCart)
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
     { /*<Appbar />*/}
      <div className="flex flex-1">
        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-64 min-h-[calc(100vh-4rem)] pt-20 px-6 flex-col  bg-white backdrop-blur-sm hidden md:flex"
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
        <div className="flex-1 p-4 md:p-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square relative overflow-hidden rounded-xl bg-gradient-to-br from-deal-purple/5 to-deal-orange/5"
                  >
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="grid grid-cols-3 gap-3">
                    {product.images.map((image, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          selectedImage === index ? 'border-deal-purple shadow-lg' : 'border-transparent'
                        }`}
                      >
                        <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                </div>
                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
                      {product.name}
                    </h1>
                    <div className="flex items-center mt-3 space-x-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-deal-purple">Rs {product.price}</div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  {/* Color Selector */}
                  <div>
                    <h3 className="font-medium mb-3 text-gray-800">Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <motion.button
                          key={size}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            selectedSize === size
                              ? 'bg-gradient-to-r from-deal-purple to-deal-orange text-white shadow-lg'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  {/* Quantity Selector */}
                  <div>
                    <h3 className="font-medium mb-3 text-gray-800">Quantity</h3>
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg font-medium"
                      >
                        -
                      </motion.button>
                      <span className="w-16 text-center py-2 bg-gray-50 rounded-lg text-lg font-medium">
                        {quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg font-medium"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCart}
                      className="flex-1 bg-gradient-to-r from-deal-purple to-deal-orange text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Heart className="w-5 h-5 text-deal-purple" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Share2 className="w-5 h-5 text-deal-orange" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};