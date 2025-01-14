import { useNavigate } from "react-router-dom"
import { Appbar } from "../Components/Appbar"
import ProductCard from "../Components/ProductCard"

export function ProductList() {
    const navigate = useNavigate();
    return <div className="h-[100vh] flex">
        <Appbar />
        <div className="h-full bg-slate-200 pt-16 w-1/5">
            <div className="flex flex-col pt-8 px-4 gap-6">
                <div>Home</div>
                <div>Categories</div>
                <div>Brands</div>
            </div>
        </div>
        <div className="pt-16 w-4/5 mt-10 px-8">
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