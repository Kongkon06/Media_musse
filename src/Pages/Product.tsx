import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Appbar } from '../Components/Appbar';

export const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    description: "Premium quality cotton t-shirt perfect for everyday wear. Features a comfortable fit and durable fabric that maintains its shape wash after wash.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    rating: 4.5,
    reviews: 128,
    images: [
      "/api/placeholder/500/600",
      "/api/placeholder/500/600",
      "/api/placeholder/500/600",
    ]
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product: product.name,
      quantity,
      size: selectedSize,
    });
  };

  return (
    <div className='h-dvh pt-16'>
        <Appbar/>
        <div className='w-1/5 h-full bg-slate-200'></div>
        <div className='w-4/5'>
        <div className=" mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2 space-x-4">
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

          <div className="text-2xl font-bold">${product.price}</div>

          <p className="text-gray-600">{product.description}</p>

          {/* Size Selector */}
          <div>
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
};
