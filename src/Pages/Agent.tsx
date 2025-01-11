import { Appbar } from "../Components/Appbar";
import { SearchBar } from "../Components/SearchBar";
import { StoreCard } from "../Components/StoreCard";
import instrumentsImage from '/instrumentstorejpg.jpg';

export function Agent(){
    return <div className="h-dvh">
        <Appbar/>
        <div className="flex h-full">
        <div className="w-1/5 h-full bg-slate-200"> hti</div>
            <div className="w-4/5 mt-10">
            <div className="flex justify-center ">
                <SearchBar/>
            </div>
            <div className="my-10 text-xl p-4 flex justify-center items-center">.
              <StoreCard name="Kongkon Store" address="Komolata pati, New Work, USA" src={instrumentsImage}/>
            </div>
            </div>
        </div>
    </div>
}