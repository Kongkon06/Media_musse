import { useRecoilState } from "recoil";
import { userCart } from "../States/Atom";

const ProductCard = () => {
  const [cart, setCart] = useRecoilState(userCart);
  return (
    <div className="group relative w-full max-w-sm rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Sale Badge */}
      <div className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 rounded-full bg-red-500 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-white">
        Sale
      </div>

      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
        <img
          src="/guitar.jpg"
          alt="Product Image"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-0.5 sm:space-y-1 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base sm:text-lg">Guitar</h3>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-base sm:text-lg font-bold text-green-600">Rs 99</span>
            <span className="text-xs sm:text-sm text-gray-500 line-through">Rs 129</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">Category</p>
      </div>

      {/* Description */}
      <div className="px-3 sm:px-4">
        <p className="text-xs sm:text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center space-x-0.5 sm:space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
          <span className="text-xs sm:text-sm text-gray-500">(4.8)</span>
        </div>
        
        <button 
          onClick={() => {
            setCart(cart + 1)
          }}
          className="rounded-lg bg-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;