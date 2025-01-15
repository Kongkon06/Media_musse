import { useRecoilState } from "recoil";
import { Appbar } from "../Components/Appbar";
import { Button } from "../Components/Button";
import { userCart } from "../States/Atom";
import { useNavigate } from "react-router-dom";
export function Cart() {
    const navigate = useNavigate();
    const ItemsCard = () => {
        return <div className="flex gap-8">
            <div>
                <img src="/guitar.jpg" className="h-48 object-cover" />
            </div>

            <div className="flex flex-col justify-between w-full">
                <div className="w-full flex justify-between">
                    <div className="flex  flex-col gap-2">
                        <div className="text-xl">Fender Stratocaster</div>
                        <div className="text-slate-400">Blue, 2.3kg...</div>
                    </div>
                    <div className="px-4 text-lg text-green-600">
                        $99
                    </div>
                </div>
                <div className="flex w-full justitfy-between">
                    <div className="flex gap-3 border items-center">
                        <Button>+</Button>
                        <div>1</div>
                        <Button>-</Button>
                    </div>
                    <Button onClick={() => { setCart(cart - 1) }} className="bg-red-600 ml-6 text-white">Cancel</Button>
                </div>
            </div>

        </div>
    }
    const [cart, setCart] = useRecoilState(userCart);
    return <div className="min-h-screen flex gap-8 justify-center bg-gray-50 pt-16">
        <Appbar />
        <div className="w-3/5 flex flex-col gap-6 h-full mt-16">
            <div className=" h-20 p-4 flex flex-col gap-2 shadow-md">
                <div className="text-xl">Deliver To</div>
                <div className="text-slate-500 text-md">Dibtugarh,Assam</div>
            </div>
            <div> {cart != 0 ? (
                 <div>
                 <div className=" px-4 flex flex-col shadow-md">
                 {Array.from({ length: cart }, (_, i) => (
                     <div key={i} className=" py-4 border-b border-slate-200">
                         <ItemsCard />
                     </div>
                 ))}
                 </div>
                 <div className="h-16 w-full shadow-md flex justify-end items-center p-4">
                 <Button className="bg-black text-white">Place order</Button>
                 </div>
             </div>
            ) : ( <div className="w-full min-h-56 text-xl flex gap-2 justify-center items-center">
                Looks Like your Cart is empty! need more <Button onClick={()=>{navigate('/')}} className="text-xl">Shoping</Button>
            </div>)}</div>
        </div>
        <div className="w-1/5 h-full flex-col gap-4 p-4 shadow-md mt-16">
            <div className="text-xl">Price Details</div>
            <div className="flex justify-between">Price <span className="text-green-500">${99 * cart}</span></div>
            <div className="flex justify-between">Discount <span className="text-green-500">100.0</span></div>
            <div className="flex justify-between">Delivery charges <span className="text-green-500">60.0</span></div>
            <div className="flex my-2 justify-between">Total Price <span className="text-green-500 font-semibold">100</span></div>
        </div>
    </div>
}
