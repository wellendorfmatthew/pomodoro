

export default function Timer() {
    return (
        <div className="rounded-full bg-linear-to-br from-quaternary to-primary p-6 aspect-square">
            <div className="rounded-full bg-quaternary p-6 aspect-square">
                <div className="rounded-full border-8 border-secondary flex flex-col items-center justify-center gap-8 p-6 aspect-square">
                    <h1 className="text-8xl font-bold">17:59</h1>
                    <p className="text-xl">P A U S E</p>
                </div>
            </div>
        </div>
    )
}