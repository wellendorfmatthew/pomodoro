import { BiX } from "react-icons/bi"

export default function Modal() {
    return (
        <div className="rounded-2xl p-6 flex flex-col items-start justify-start gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-primary font-semibold text-4xl">Settings</h1>
                <BiX size={24} />
            </div>
            <hr className="h-1 w-full" />
            <div className="flex flex-col gap-4 items-start justify-start">
                <h2>Time (MINUTES)</h2>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2 items-start justify-start">
                        <label htmlFor="pomodoro">pomodoro</label>
                        <input type="text" id="pomodoro" value={30} />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start">
                        <label htmlFor="short-break">short break</label>
                        <input type="text" id="short-break" value={5} />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start">
                        <label htmlFor="long-break">long break</label>
                        <input type="text" id="long-break" value={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}