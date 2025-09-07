export type Mode = {
  mode: Modes;
  time: Time;
}

export type Modes = "pomodoro" | "short break" | "long break";

export type TimerModes = "Play" | "Pause";

export type Time = {
    minutes: number;
    seconds: number;
}