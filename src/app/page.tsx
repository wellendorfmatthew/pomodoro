"use client"

import Image from "next/image";
import Selector from "./components/selector/selector";
import Timer from "./components/timer/timer";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import { Mode, Modes } from "../../types";
import { modes } from "../../config/modes";

export default function Home() {
  const [mode, setMode] = useState<Mode>(modes[0]);

  const handleModeChange = (newMode: Modes) => {
    const newModeObj = modes.find((m) => m.mode === newMode);

    if (newModeObj) {
      setMode(newModeObj);
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-4xl">pomodoro</h1>
      <Selector mode={mode} onModeChange={handleModeChange} />
      <Timer mode={mode} />
      <FaGear size={30} />
    </div>
  );
}
