"use client"

import { useState } from "react"
import { Mode, Modes } from "../../../../types"

type SelectorProps = {
    mode: Mode
}

export default function Selector({mode}: SelectorProps) {
    const [currentMode, setCurrentMode] = useState<Modes>(mode.mode);
    
    const handleMode = (newMode: Modes) => {
        mode.mode = newMode;
        setCurrentMode(newMode);
    }

    return (
        <div className="rounded-full flex justify-center items-center gap-8 bg-quaternary p-4">
            <button 
                className={`${currentMode === "pomodoro" ? "text-primary bg-secondary" : "text-tertiary bg-quaternary"} rounded-full flex items-center justify-center p-4 font-semibold hover:cursor-pointer`} 
                onClick={() => handleMode("pomodoro")}
            >
                pomodoro
            </button>
            <button 
                className={`${currentMode === "short break" ? "text-primary bg-secondary" : "text-tertiary bg-quaternary"} rounded-full flex items-center justify-center p-4 font-semibold hover:cursor-pointer`} 
                onClick={() => handleMode("short break")}
            >
                short break
            </button>
            <button 
                className={`${currentMode === "long break" ? "text-primary bg-secondary" : "text-tertiary bg-quaternary"} rounded-full flex items-center justify-center p-4 font-semibold hover:cursor-pointer`} 
                onClick={() => handleMode("long break")}
            >
                long break
            </button>
        </div>
    )
}