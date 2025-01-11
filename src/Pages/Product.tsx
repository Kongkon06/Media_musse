import { Appbar } from "../Components/Appbar";

export function Product(){
    return <div className="h-screen">
        <Appbar/>
        <div>
            <div className="w-1/5 bg-slate-200">
            </div>
            <div className="fles h-full grid grid-cols-3">
            Product Page
            </div>
        </div>
    </div>
}