import { useState } from "react";
import { Appbar } from "../Components/Appbar";
import { Card } from "../Components/Card";

export function Categories() {
  type CategoryItem = { name: string; image?: string };
type Categories = {
  Instruments: CategoryItem[];
  SoundandProduction_Software: CategoryItem[];
  Audio_Equipment: CategoryItem[];
  Accessories: CategoryItem[];
  Sheet_MusicandBooks: CategoryItem[];
};
  const categories: Categories = {
    Instruments: [
      { name: "Guitar", image: "/guitar.jpg" },
      { name: "Keyboard", image: "/keyboard.jpg" },
      { name: "Piano", image: "/piano.jpg" },
      { name: "Drums", image: "/drums.jpg" },
      { name: "Percussion", image: "/precussion.jpg" },
    ],
    SoundandProduction_Software: [
      { name: "Digital Audio Workstations (DAWs)",image:"/digital.jpg" },
      { name: "VST Plugins & Effects", image:"/plugin.jpg" },
      { name: "Loop Libraries" },
    ],
    Audio_Equipment: [
      { name: "Microphones",image:"/microphone.jpg" },
      { name: "Audio Interfaces",image:"/audio.jpg" },
      { name: "Studio Interfaces",image:"/studio.jpg" },
      { name: "Studio Monitors" },
    ],
    Accessories: [
      { name: "Guitar Picks" ,image:"/picks.jpg" },
      { name: "Stand & Mounts" },
      { name: "Tuners & Metronome" },
      { name: "Cases & Bags" },
      { name: "Cables & Connectors" },
      { name: "Straps" , image:"/straps.jpg" },
    ],
    Sheet_MusicandBooks: [
      { name: "Music Sheets (for different instruments)", image:"/music_sheets.jpg" },
      { name: "Music Theory Books" },
      { name: "Music Education (method books)" },
    ],
  };

  type CategoryKeys = keyof typeof categories;

  const [state, setState] = useState<CategoryKeys>("Instruments");

  console.log(state);

  return (
    <div className="h-dvh pt-16">
      <Appbar />
      <div className="flex h-full">
        <div className="flex w-1/5 h-full pt-10 px-4 flex-col gap-10 bg-slate-200">
          <div role="button" onClick={() => setState("Instruments")}>
            Instruments
          </div>
          <div
            role="button"
            onClick={() => setState("SoundandProduction_Software")}
          >
            Sound and Production Software
          </div>
          <div role="button" onClick={() => setState("Audio_Equipment")}>
            Audio Equipment
          </div>
          <div role="button" onClick={() => setState("Accessories")}>
            Accessories
          </div>
          <div role="button" onClick={() => setState("Sheet_MusicandBooks")}>
            Sheet Music & Books
          </div>
        </div>
        <div className="w-4/5">
          <div className="my-16 text-2xl px-4 font-bold">{state}</div>
          <div className="px-4">
          <div className="grid grid-cols-4 gap-10">
            {categories[state].map((item, index) => (
              <Card
              key={index}
              className="relative group overflow-hidden shadow-lg h-56 transition-transform duration-300 hover:scale-105"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:blur-sm"
                src={item.image}
                alt="Guitar"
              />
              <div className="relative text-2xl font-bold text-slate-200 p-4">
                {item.name}
              </div>
            </Card>
            
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
