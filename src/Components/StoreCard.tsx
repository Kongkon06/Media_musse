import { Star } from "./Star";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/Components/ui/button";

interface StoreCardProps {
  name: string;
  address: string;
  src: string;
}

export function StoreCard({ name, address, src }: StoreCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-deal-purple" />
            <span className="text-sm">{address}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4 text-deal-orange" />
            <span className="text-sm">Open: 9:00 AM - 9:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4 text-green-500" />
            <span className="text-sm">+91 1234567890</span>
          </div>
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-2 ">
              <Star number={4} />
              <span className="text-sm text-gray-500">(4.0)</span>
            </div>
          </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 border-deal-purple text-deal-purple hover:bg-deal-purple hover:text-white"
          >
            Get Directions
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-deal-purple to-deal-orange text-white hover:opacity-90"
          >
            Contact Store
          </Button>
        </div>
      </div>
    </div>
  );
}