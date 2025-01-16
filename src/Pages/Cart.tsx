import { useRecoilState } from "recoil";
import { Appbar } from "../Components/Appbar";
import { Button } from "../Components/Button";
import { userCart } from "../States/Atom";
import { useNavigate } from "react-router-dom";

export function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useRecoilState(userCart);

    const ItemsCard = () => {
        return (
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-auto">
                    <img src="/guitar.jpg" className="w-full md:w-auto h-48 object-cover rounded-lg" />
                </div>

                <div className="flex flex-col justify-between w-full gap-4 md:gap-0">
                    <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg md:text-xl">Fender Stratocaster</div>
                            <div className="text-slate-400">Blue, 2.3kg...</div>
                        </div>
                        <div className="text-lg text-green-600">
                            $99
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full justify-between">
                        <div className="flex gap-3 border items-center w-fit">
                            <Button>+</Button>
                            <div>1</div>
                            <Button>-</Button>
                        </div>
                        <Button
                            onClick={() => { setCart(cart - 1) }}
                            className="bg-red-600 text-white w-full sm:w-auto sm:ml-6"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
            <Appbar />

            <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 max-w-7xl mx-auto w-full mt-16">
                {/* Main Content */}
                <div className="w-full lg:w-3/5 flex flex-col gap-6">
                    <div className="p-4 flex flex-col gap-2 shadow-md bg-white rounded-lg">
                        <div className="text-xl">Deliver To</div>
                        <div className="text-slate-500 text-md">Dibtugarh, Assam</div>
                    </div>

                    <div>
                        {cart != 0 ? (
                            <div>
                                <div className="flex flex-col shadow-md bg-white rounded-lg overflow-hidden">
                                    {Array.from({ length: cart }, (_, i) => (
                                        <div key={i} className="p-4 border-b border-slate-200">
                                            <ItemsCard />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="w-full min-h-56 text-xl flex flex-col sm:flex-row gap-2 justify-center items-center bg-white rounded-lg shadow-md p-4">
                                Looks Like your Cart is empty! need more
                                <Button
                                    onClick={() => { navigate('/') }}
                                    className="text-xl"
                                >
                                    Shopping
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Price Details */}
                <div className="w-full lg:w-1/3 ">
                <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                <div className="text-xl mb-4">Price Details</div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            Price <span className="text-green-500">${99 * cart}</span>
                        </div>
                        <div className="flex justify-between">
                            Discount <span className="text-green-500">100.0</span>
                        </div>
                        <div className="flex justify-between">
                            Delivery charges <span className="text-green-500">60.0</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t">
                            <span className="font-semibold">Total Price</span>
                            <span className="text-green-500 font-semibold">100</span>
                        </div>
                    </div>
                </div>
                    <div className="h-16 shadow-md bg-white rounded-lg mt-4 flex justify-center lg:justify-end items-center p-4">
                        <Button className="bg-black text-white text-lg">Place order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}