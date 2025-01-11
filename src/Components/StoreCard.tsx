import { Star } from "./Star";

interface RestaurantCardProps {
    src: string;
    name: string;
    address: string;
  }
  
  export function StoreCard({ src, name, address }: RestaurantCardProps){
    return (
      <div className="w-full h-56 shadow-lg rounded-lg overflow-hidden flex bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="w-1/3 md:w-1/4">
          <img 
            src={src} 
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 mb-4 text-sm">{address}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star number={4} />
              <span className="text-sm text-gray-500">(4.0)</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 text-sm text-green-600 bg-green-50 rounded-full">Open Now</span>
              <span className="text-sm text-gray-500">• 0.8 miles away</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  ;