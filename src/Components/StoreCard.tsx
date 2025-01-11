import {Star} from './Star'
export function StoreCard({src,name,address}:{src:string,name:string,address:string}){
    return <div className="w-full h-56 flex">
        <div className="1/5">
        <img src={src} className="h-full w-full object-cover"></img>
        </div>
        <div className="pl-2 flex flex-col">
            <div className="text-xl">{name}</div>
            <div className="mt-2">{address}</div>
            <div className=" mt-2">
                <Star number={4}/>
            </div>
        </div>
    </div>
}