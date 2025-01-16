import { Card } from "../Components/Card.tsx";
import CountdownTimer from "./CountdownTimer.tsx";

interface DealCardProps {
  title: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  endDate: Date;
}

const DealCard = ({ title, image, originalPrice, dealPrice, endDate }: DealCardProps) => {
  const discount = Math.round(((originalPrice - dealPrice) / originalPrice) * 100);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute top-3 right-3 bg-deal-discount text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {discount}% OFF
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 text-deal-price group-hover:text-deal-discount transition-colors">
          {title}
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 line-through text-sm">
              Rs {originalPrice.toFixed(2)}
            </span>
            <span className="text-deal-price font-bold text-2xl">
              Rs {dealPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Ends in:</span>
            <CountdownTimer endDate={endDate} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;