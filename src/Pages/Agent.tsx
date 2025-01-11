import { Appbar } from "../Components/Appbar";
import { SearchBar } from "../Components/SearchBar";
import { StoreCard } from "../Components/StoreCard";

export function Agent() {
  const stores = [
    {
      id: 1,
      name: "Kongkon Store",
      address: "Komolata Pati, New York, USA",
      src: "/instrumentstorejpg.jpg",
    },
    {
      id: 2,
      name: "Harmony Music Center",
      address: "Downtown Street, Los Angeles, USA",
      src: "/instrument.jpg",
    },
    {
      id: 3,
      name: "Melody Shop",
      address: "Park Avenue, Chicago, USA",
      src: "/streetinstrument.jpg",
    },
    {
      id: 4,
      name: "Symphony Instruments",
      address: "Broadway Lane, Houston, USA",
      src: "/brook.jpg",
    },
    {
      id: 5,
      name: "Orchestra Hub",
      address: "Bay Area, San Francisco, USA",
      src: "/stwewarts.jpg",
    },
  ];

  return (
    <div className="h-dvh">
      <Appbar />
      <div className="flex h-full">
        <div className="w-1/5 h-full bg-slate-200"> hti</div>
        <div className="w-4/5 mt-10">
          <div className="flex justify-center">
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
