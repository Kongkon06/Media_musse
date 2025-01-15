import { useRecoilState } from "recoil";
import { Appbar } from "../Components/Appbar";
import { Button } from "../Components/Button";
import { userCart } from "../States/Atom";
export function Cart(){
    const [cart,setCart] = useRecoilState(userCart);
    return <div className="min-h-screen flex gap-8 justify-center pt-16">
       <Appbar/>
       <div className="w-3/5 flex flex-col gap-6 h-full mt-16">
       <div className=" h-20 p-4 shadow-md">
        Deliver To
       </div>
       <div className=" p-4 flex flex-col gap-4 shadow-md">
       {Array.from({ length: cart }, (_, i) => (
          <div key={i} className="">
           <ItemsCard/>
          </div>
        ))}
       </div>
       </div>
       <div className="w-1/5 h-full p-4 shadow-md mt-16">
        <div className="text-xl">Price Details</div>
       </div>
    </div>
}

function ItemsCard(){
    return <div className="flex gap-8">
        <div>
            <img src="/guitar.jpg" className="h-48 object-cover"/>
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
            <div>number</div>
            <Button>-</Button>
        </div>
        <Button className="bg-red-600 ml-6 text-white">Cancel</Button>
        </div>
        </div>

    </div>
}