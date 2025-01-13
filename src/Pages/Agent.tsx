import { useRecoilValue } from "recoil";
import { Appbar } from "../Components/Appbar";
import { SearchBar } from "../Components/SearchBar";
import { StoreCard } from "../Components/StoreCard";
import { randomstores } from "../States/Atom";

export function Agent() {
  const stores = useRecoilValue(randomstores);
  return (
    <div className="h-dvh">
      <Appbar />
      <div className="flex h-full">
        <div className="w-1/5 h-full bg-slate-200"> hti</div>
        <div className="w-4/5 mt-10">
          <div className="flex flex-col items-center font-dm-sans gpa-10 pt-16 px-8">
            <div className="flex text-xl"> We are <div className="text-green-400 underline mx-2">available</div> in most parts of India</div>
            <SearchBar />
          </div>
          <div className="my-10 text-xl p-4 flex flex-wrap justify-center items-center gap-6">
            {stores.map((item: any) => (
              <StoreCard
                key={item.id}
                name={item.name}
                address={item.address}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
