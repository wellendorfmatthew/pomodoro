"use client"

import React from "react";
import { useEffect, useState, useRef } from "react";
import { BiPlay, BiPlayCircle, BiPause, BiPauseCircle, BiUndo } from "react-icons/bi";
import { Mode } from "../../../../types";

type TimerProps = {
    mode: Mode
}

const getFormattedTime = (totalTime: number) => {
    const hours = Math.floor((totalTime / 3600) % 60); // When time is in seconds, divide by 3600, divide by 60, then take remainder of that
    const minutes = Math.floor((totalTime / 60) % 60); // When time is in seconds, divide by 60, then divide by 60 again and take the remainder
    const seconds = Math.floor(totalTime % 60); // When time is in seconds, divide by 60, then take the remainder

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export default function Timer({mode}: TimerProps) {
    const [total, setTotal] = useState(mode.time.minutes * 60 + mode.time.seconds);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const formattedTime = getFormattedTime(total);

    const resetTime = () => {
        const resetTotal = mode.time.minutes * 60 + mode.time.seconds;
        setIsRunning(false);
        setTotal(resetTotal);
    }

    useEffect(() => {
        resetTime();
    }, [mode]);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setTotal((prev) => {
                if (prev > 0) {
                    return prev - 1;
                }

                clearInterval(intervalRef.current as NodeJS.Timeout);
                return 0;
            })
        }, 1000)

        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, [isRunning]);

    return (
        <div className="rounded-full bg-linear-to-br from-quaternary to-primary p-6 aspect-square">
            <div className="rounded-full bg-quaternary p-6 aspect-square">
                <div className="rounded-full border-8 border-secondary flex flex-col items-center justify-center gap-8 p-10 aspect-square">
                    <h1 className="text-8xl font-bold">{formattedTime}</h1>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-secondary rounded-full px-2 cursor-pointer" onClick={() => setIsRunning((running) => !running)}>{isRunning ? <BiPause size={30} /> : <BiPlay size={30} />}</button>
                        <button className="bg-secondary rounded-full px-2 cursor-pointer" onClick={() => resetTime()}><BiUndo size={30} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}