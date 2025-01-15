import { useNavigate } from "react-router-dom"
import { Appbar } from "../Components/Appbar"
import ProductCard from "../Components/ProductCard"
import { useState } from "react";
import { Button } from "../Components/Button";
import { Label } from "../Components/ui/label";
import { Slider } from "../Components/ui/slider";
import { Checkbox } from "../Components/ui/checkbox";
import { Input } from "../Components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
export function ProductList() {
    const navigate = useNavigate();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const categories = [
      "Acoustic Guitars",
      "Electric Guitars",
      "Bass Guitars",
      "Classical Guitars",
    ];
    const brands = ["Fender", "Gibson", "Yamaha", "Ibanez", "Martin"];
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Appbar />
        <div className="flex">
          {/* Sidebar with Filters */}
          <div className="w-1/5 min-h-[calc(100vh-4rem)] bg-white shadow-lg pt-20">
            <div className="flex flex-col p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Refine your search</span>
                </div>
              </div>
              {/* Search within results */}
              <div className="space-y-2">
                <Label>Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10"
                  />
                </div>
              </div>
              {/* Price Range */}
              <div className="space-y-4">
                <Label>Price Range</Label>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              {/* Categories */}
              <div className="space-y-4">
                <Label>Categories</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Brands */}
              <div className="space-y-4">
                <Label>Brands</Label>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label
                        htmlFor={brand}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Apply Filters Button */}
              <Button className="w-full bg-gradient-to-r from-deal-purple to-deal-orange text-white hover:opacity-90">
                Apply Filters
              </Button>
            </div>
          </div>
          {/* Product Grid */}
          <div className="w-4/5 pt-20 p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Featured Products</h1>
              <p className="text-gray-600">Discover our collection of premium instruments</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 8].map((item) => (
                <div
                  key={item}
                  role="button"
                  onClick={() => navigate("/product")}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }