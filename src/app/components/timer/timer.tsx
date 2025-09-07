"use client"

import React from "react";
import { useEffect, useState } from "react";
import { BiPlay, BiPlayCircle, BiPause, BiPauseCircle, BiUndo } from "react-icons/bi";
import { Mode, TimerModes } from "../../../../types";

type TimerProps = {
    mode: Mode
}

export default function Timer({mode}: TimerProps) {
    //const [total, setTotal] = useState(62);
    let total = 62;
    const [time, setTime] = useState("01:02");
    const [timeMode, setTimeMode] = useState<TimerModes>("Pause");

    const getTime = (totalTime: number) => {
        const hours = Math.floor((totalTime / 3600) % 60); // When time is in seconds, divide by 3600, divide by 60, then take remainder of that
        const minutes = Math.floor((totalTime / 60) % 60); // When time is in seconds, divide by 60, then divide by 60 again and take the remainder
        const seconds = Math.floor(totalTime % 60); // When time is in seconds, divide by 60, then take the remainder

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    // useEffect(() => {
    //     let intervalId = setInterval(() => {
    //         console.log(total);
    //         setTotal((prev) => {
    //             if (prev === 0) {
    //                 clearInterval(intervalId);
    //                 return 0;
    //             } else {
    //                 return prev - 1;
    //             }
    //         })
    //     }, 1000)
    //     return () => clearInterval(intervalId);
    // }, []);

    // useEffect(() => {
    //     setTime(getTime(total));
    // }, [total]);

    return (
        <div className="rounded-full bg-linear-to-br from-quaternary to-primary p-6 aspect-square">
            <div className="rounded-full bg-quaternary p-6 aspect-square">
                <div className="rounded-full border-8 border-secondary flex flex-col items-center justify-center gap-8 p-6 aspect-square">
                    <h1 className="text-8xl font-bold">{time}</h1>
                    <div className="flex items-center justify-center gap-4">
                        <button><BiPlay size={24} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}