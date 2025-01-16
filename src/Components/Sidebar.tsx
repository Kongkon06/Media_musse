import { useState } from 'react';
import { Menu, X, Home, ShoppingBag, Heart, User, Settings, ChevronRight } from 'lucide-react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Products', icon: ShoppingBag },
    { name: 'Wishlist', icon: Heart },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-50 rounded-lg bg-white p-2 shadow-lg md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:top-0 md:w-1/5 md:translate-x-0`}
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-4 hidden rounded-full bg-white p-1 shadow-lg md:block"
        >
          <ChevronRight className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Close button - Only visible on mobile */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 p-2 md:hidden"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Sidebar Content */}
        <div className="flex h-full flex-col overflow-y-auto bg-white px-4 py-8">
          {/* Logo or Brand */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-10 w-10 rounded-lg bg-blue-500" />
            {isOpen && <span className="ml-3 text-xl font-bold">Brand</span>}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-sm transition-colors
                    ${activeItem === item.name 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Icon className="h-5 w-5" />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </button>
              );
            })}
          </nav>

          {/* User Profile Section */}
          <div className="mt-auto border-t pt-4">
            <button className="flex w-full items-center rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="h-8 w-8 rounded-full object-cover"
              />
              {isOpen && (
                <div className="ml-3 text-left">
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">john@example.com</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
