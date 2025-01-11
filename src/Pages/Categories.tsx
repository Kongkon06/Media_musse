import { useState } from "react";
import { Appbar } from "../Components/Appbar";

export function Categories() {
  const category = {
    Instruments: ["Guitar", "Keyboard", "Piano", "Drums", "Percussion"],
    SoundandProduction_Software: [
      "Digital Audio Workstations (DAWs)",
      "VST Plugins & Effects",
      "Loop Libraries",
    ],
    Audio_Equipment: [
      "Microphones",
      "Audio Interfaces",
      "Studio Interfaces",
      "Studio Monitors",
    ],
    Accessories: [
      "Guitar Picks",
      "Stand & Mounts",
      "Tuners & Metronome",
      "Cases & Bags",
      "Cables & Connectors",
      "Straps",
    ],
    Sheet_MusicandBooks: [
      "Music Sheets (for different instruments)",
      "Music Theory Books",
      "Music Education (method books)",
    ],
  };

  type CategoryKeys = keyof typeof category;

  const [state, setState] = useState<CategoryKeys>("Instruments");

  console.log(state);

  return (
    <div className="h-dvh">
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
            {category[state].map((item, index) => (
              <div key={index} className="p-4 h-36 bg-gray-200 rounded shadow">
                {item}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
