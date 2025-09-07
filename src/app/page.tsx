"use client"

import Image from "next/image";
import Selector from "./components/selector/selector";
import Timer from "./components/timer/timer";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import { Mode } from "../../types";
import { modes } from "../../config/modes";

export default function Home() {
  const [mode, setMode] = useState<Mode>({mode: modes[0].mode, time: modes[0].time});

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-4xl">pomodoro</h1>
      <Selector mode={mode} />
      <Timer mode={mode} />
      <FaGear size={30} />
    </div>
  );
}
