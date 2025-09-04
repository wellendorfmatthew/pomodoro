"use client"

import Image from "next/image";
import Selector from "./components/selector/selector";
import Timer from "./components/timer/timer";
import { FaGear } from "react-icons/fa6";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-4xl">pomodoro</h1>
      <Selector />
      <Timer />
      <FaGear size={30} />
    </div>
  );
}
