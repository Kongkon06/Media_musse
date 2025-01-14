import { useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";

export function Brands(){
    const navigate = useNavigate();
    return <div className="h-full">
        <Appbar/>
        <div className="w-1/5 h-full bg-slate-200 flex flex-col gap-6 px-4 pt-20">
        <div role="button" onClick={()=>navigate('/')}>
         Home
        </div>
        <div role="button" onClick={()=>navigate('/categories')}>
         Categories
        </div>
        <div role="button" onClick={()=>navigate('/brands')}>
         Brands
        </div>
        <div role="button" onClick={()=>navigate('/deals')}>
         Deals
        </div>
        </div>
        <div className="w-4/5 h-full"></div>
    </div>
}