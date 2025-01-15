import { useRecoilValue } from "recoil";
import { Appbar } from "../Components/Appbar";
import { SearchBar } from "../Components/SearchBar";
import { StoreCard } from "../Components/StoreCard";
import { randomstores } from "../States/Atom";
import { Home, Package, ShoppingCart, Store, Tag } from "lucide-react";
import { Button } from "@/Components/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Store {
  id: number;
  name: string;
  address: string;
  src: string;
}
export function Agent() {
  const stores = useRecoilValue(randomstores);
  const navigate = useNavigate();
  const sidebarItems = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Package, label: "Categories", route: "/categories" },
    { icon: Store, label: "Brands", route: "/brands" },
    { icon: Tag, label: "Deals", route: "/deals" },
    { icon: ShoppingCart, label: "Cart", route: "/cart" },
  ];
  return (
    <div className="flex min-h-screen">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-1/5 bg-white shadow-md pt-20 px-4"
  >
    {sidebarItems.map((item) => (
      <Button
        key={item.label}
        aria-label={`Navigate to ${item.label}`}
        variant="ghost"
        className="w-full justify-start gap-2 mb-2 text-lg font-medium text-gray-700 hover:text-deal-purple hover:bg-deal-purple/10 transition-all duration-300"
        onClick={() => navigate(item.route)}
      >
        <item.icon className="h-5 w-5" />
        {item.label}
      </Button>
    ))}
  </motion.div>
  <div className="flex-grow">
    <Appbar />
    <div className="flex flex-col items-center font-dm-sans gap-10 pt-16 px-8">
      <div className="flex text-xl">
        We are <div className="text-green-400 underline mx-2">available</div> in most parts of India
      </div>
      <SearchBar />
    </div>
    <div className="my-10 text-xl p-4 flex flex-wrap justify-center items-center gap-6">
      {stores.length === 0 ? (
        <p className="text-gray-500">No stores available currently.</p>
      ) : (
        stores.map((item: Store) => (
          <StoreCard
            key={item.id}
            name={item.name}
            address={item.address}
            src={item.src}
          />
        ))
      )}
    </div>
  </div>
</div>

  );
}
