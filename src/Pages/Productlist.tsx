import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Appbar } from "../Components/Appbar";
import { Home, Package, Store, Tag } from "lucide-react";
import { Button } from "../Components/Button";
import ProductCard from "../Components/ProductCard"

export function ProductList() {
    const navigate = useNavigate();
    const sidebarItems = [
        { icon: Home, label: "Home", route: "/" },
        { icon: Package, label: "Categories", route: "/categories" },
        { icon: Store, label: "Brands", route: "/brands" },
        { icon: Tag, label: "Deals", route: "/deals" },
      ];
    return <div className="h-[100vh] flex">
        <Appbar />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 min-h-[calc(100vh-4rem)] shadow-md pt-20 px-4"
        >
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2 mb-2 text-base font-medium text-gray-700 hover:text-deal-purple hover:bg-deal-purple/10 transition-all duration-300"
              onClick={() => navigate(item.route)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </motion.div>
        <div className="pt-16 w-full bg-slate-100 mt-10 px-8">
            <div className="grid grid-cols-4 gap-6 ">
               <div role="button" onClick={()=>{navigate('/product')}}><ProductCard /></div>
               <div role="button" onClick={()=>{navigate('/product')}}><ProductCard /></div>
               <div role="button" onClick={()=>{navigate('/product')}}><ProductCard /></div>
               <div role="button" onClick={()=>{navigate('/product')}}><ProductCard /></div>
               <div role="button" onClick={()=>{navigate('/product')}}><ProductCard /></div>
            </div>
        </div>
    </div>
}