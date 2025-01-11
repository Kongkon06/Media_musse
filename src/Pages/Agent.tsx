import { Appbar } from "../Components/Appbar";

export function Agent(){
    return <div className="h-100%">
        <Appbar/>
        <div className="flex h-full">
        <div className="w-1/5 h-full bg-slate-200"> hti</div>
            <div className="w-4/5 mt-10">
            <div className="flex mx-auto gap-10">
            <div className="w-3/5 h-12 bg-slate-200"></div> Q
            </div>
            <div className="my-10 text-xl flex justify-center items-center">
                Agent details
            </div>
            </div>
        </div>
    </div>
}