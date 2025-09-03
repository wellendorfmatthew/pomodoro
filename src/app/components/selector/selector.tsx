

export default function Selector() {
    return (
        <div className="rounded-full flex justify-center items-center gap-8 bg-quaternary p-4">
            <button className="text-primary bg-secondary rounded-full flex items-center justify-center p-4 font-semibold">pomodoro</button>
            <button className="text-primary bg-secondary rounded-full flex items-center justify-center p-4 font-semibold">short break</button>
            <button className="text-primary bg-secondary rounded-full flex items-center justify-center p-4 font-semibold">long break</button>
        </div>
    )
}