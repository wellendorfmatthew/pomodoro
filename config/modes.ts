import { Mode } from "../types";

export const modes : Mode[] = [
    {
        mode: "pomodoro",
        time: {
            minutes: 30,
            seconds: 0
        }
    },
    {
        mode: "short break",
        time: {
            minutes: 5,
            seconds: 0
        }
    },
    {
        mode: "long break",
        time: {
            minutes: 10,
            seconds: 0
        }
    },
]