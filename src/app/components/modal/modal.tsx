import { BiX, BiCheck } from "react-icons/bi"
import { modes } from "../../../../config/modes"

export default function Modal() {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900/50 z-50">
            <div className="rounded-2xl p-6 flex flex-col items-start justify-start gap-4 bg-slate-50 text-primary">
                <div className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-4xl">Settings</h1>
                    <BiX size={24} />
                </div>
                <hr className="h-1 w-full" />
                <div className="flex flex-col gap-4 items-start justify-start">
                    <h2 className="text-lg font-semibold">Time (MINUTES)</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <label htmlFor="pomodoro" className="text-slate-400 font-semibold text-sm">pomodoro</label>
                            <input type="text" id="pomodoro" value={30} className="bg-slate-200 font-semibold rounded-2xl p-4 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <label htmlFor="short-break" className="text-slate-400 font-semibold text-sm">short break</label>
                            <input type="text" id="short-break" value={5} className="bg-slate-200 font-semibold rounded-2xl p-4 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <label htmlFor="long-break" className="text-slate-400 font-semibold text-sm">long break</label>
                            <input type="text" id="long-break" value={10} className="bg-slate-200 font-semibold rounded-2xl p-4 outline-none" />
                        </div>
                    </div>
                </div>
                <hr className="h-1 w-full" />
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-semibold">Font</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <p className="text-lg font-semibold">Aa</p>
                        </div>
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <p className="text-lg font-semibold">Aa</p>
                        </div>
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <p className="text-lg font-semibold">Aa</p>
                        </div>
                    </div>
                </div>
                <hr className="h-1 w-full" />
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-semibold">Color</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <BiCheck size={24} />
                        </div>
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <BiCheck size={24} />
                        </div>
                        <div className="rounded-full aspect-square w-12 p-2 flex items-center justify-center bg-slate-200">
                            <BiCheck size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}