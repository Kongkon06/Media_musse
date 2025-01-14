
const ProductCard = () => {
  return (
    <div className="group relative w-full max-w-sm rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Sale Badge */}
      <div className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
        Sale
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src="/guitar.jpg"
          alt="Product Image"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Guitar</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">$99</span>
            <span className="text-sm text-gray-500 line-through">$129</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">Category</p>
      </div>

      {/* Description */}
      <div className="px-4">
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-4 w-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500">(4.8)</span>
        </div>
        
        <button 
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;