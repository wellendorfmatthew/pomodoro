"use client"

import React from "react";
import { useEffect, useState } from "react";
import { BiPlay, BiPlayCircle, BiPause, BiPauseCircle, BiUndo } from "react-icons/bi";
import { Mode, TimerModes } from "../../../../types";

type TimerProps = {
    mode: Mode
}

export default function Timer({mode}: TimerProps) {
    const [total, setTotal] = useState(mode.time.minutes * 60 + mode.time.seconds);
    const [timeMode, setTimeMode] = useState<TimerModes>("Pause");

    const getFormattedTime = (totalTime: number) => {
        const hours = Math.floor((totalTime / 3600) % 60); // When time is in seconds, divide by 3600, divide by 60, then take remainder of that
        const minutes = Math.floor((totalTime / 60) % 60); // When time is in seconds, divide by 60, then divide by 60 again and take the remainder
        const seconds = Math.floor(totalTime % 60); // When time is in seconds, divide by 60, then take the remainder

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    const formattedTime = getFormattedTime(total);

    const resetTime = () => {
        const resetTotal = mode.time.minutes * 60 + mode.time.seconds;
        setTimeMode("Pause");
        setTotal(resetTotal);
    }

    useEffect(() => {
        if (timeMode === "Pause") {
            return;
        }

        let intervalId = setInterval(() => {
            console.log(total);

            setTotal((prev) => {
                if (prev > 0) {
                    return prev - 1;
                }

                clearInterval(intervalId);
                return 0;
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [timeMode]);

    return (
        <div className="rounded-full bg-linear-to-br from-quaternary to-primary p-6 aspect-square">
            <div className="rounded-full bg-quaternary p-6 aspect-square">
                <div className="rounded-full border-8 border-secondary flex flex-col items-center justify-center gap-8 p-6 aspect-square">
                    <h1 className="text-8xl font-bold">{formattedTime}</h1>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-secondary rounded-full px-2 cursor-pointer" onClick={() => setTimeMode((prev) => (prev === "Pause" ? "Play" : "Pause"))}>{timeMode === "Pause" ? <BiPlay size={30} /> : <BiPause size={30} />}</button>
                        <button className="bg-secondary rounded-full px-2 cursor-pointer" onClick={() => resetTime()}><BiUndo size={30} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}