import { useRecoilState } from "recoil";
import { Appbar } from "../Components/Appbar";
import { Button } from "../Components/Button";
import { userCart } from "../States/Atom";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag } from "lucide-react";

export function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useRecoilState(userCart);

    const ItemsCard = () => {
        return (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="w-full sm:w-32 h-32 sm:h-32 flex-shrink-0">
                    <img 
                        src="/guitar.jpg" 
                        className="w-full h-full object-cover rounded-md"
                        alt="Fender Stratocaster"
                    />
                </div>

                <div className="flex flex-col justify-between w-full gap-2">
                    <div className="space-y-1">
                        <h3 className="text-base font-medium">Fender Stratocaster</h3>
                        <p className="text-sm text-slate-500">Blue, 2.3kg</p>
                        <div className="text-base font-medium text-green-600">$99</div>
                    </div>
                    
                    <div className="flex flex-col xs:flex-row gap-3 xs:items-center xs:justify-between">
                        <div className="flex items-center h-8 border rounded-md overflow-hidden">
                            <button 
                                className="px-3 h-full hover:bg-slate-100 transition-colors"
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>
                            <div className="px-3 h-full flex items-center">1</div>
                            <button 
                                className="px-3 h-full hover:bg-slate-100 transition-colors"
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        
                        <button
                            onClick={() => { setCart(cart - 1) }}
                            className="text-sm text-red-600 hover:text-red-700 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Appbar />

            <div className="flex flex-col justify-center lg:flex-row gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-4 sm:mt-8 pb-8">
                {/* Main Content */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4 mt-20">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h2 className="text-lg font-medium mb-1">Deliver To</h2>
                        <p className="text-slate-600 text-sm">Dibtugarh, Assam</p>
                    </div>

                    <div className="flex-grow">
                        {cart > 0 ? (
                            <div className="bg-white rounded-lg shadow-sm divide-y">
                                {Array.from({ length: cart }, (_, i) => (
                                    <div key={i} className="p-4">
                                        <ItemsCard />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full py-12 px-4 text-center bg-white rounded-lg shadow-sm">
                                <div className="flex justify-center mb-4">
                                    <ShoppingBag className="w-12 h-12 text-slate-400" />
                                </div>
                                <h2 className="text-lg font-medium mb-2">Look Like Your cart is empty!</h2>
                                <p className="text-slate-600 mb-4">Looking to add something?</p>
                                <Button
                                    onClick={() => { navigate('/') }}
                                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                                >
                                    Continue Shopping
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Price Details */}
                {cart > 0 && (
                    <div className="w-full lg:w-1/3 space-y-4 mt-20">
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Subtotal ({cart} items)</span>
                                    <span className="font-medium">${99 * cart}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Discount</span>
                                    <span className="text-green-600">- $100.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Delivery charges</span>
                                    <span className="text-green-600">$60.00</span>
                                </div>
                                <div className="pt-3 border-t">
                                    <div className="flex justify-between text-base font-medium">
                                        <span>Total</span>
                                        <span>$100.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <Button 
                            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Place Order
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;