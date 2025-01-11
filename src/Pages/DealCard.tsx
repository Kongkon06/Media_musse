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
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute top-2 right-2 bg-deal-orange text-white px-2 py-1 rounded-full text-sm font-bold">
          {discount}% OFF
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            <span className="text-deal-orange font-bold text-xl ml-2">{dealPrice}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">Ends in:</span>
            <CountdownTimer endDate={endDate} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;