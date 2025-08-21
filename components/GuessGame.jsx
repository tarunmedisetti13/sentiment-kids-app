import { useMemo, useState } from "react";

const BANK = [
    { text: "This cake is amazing!", label: "Happy" },
    { text: "Ugh, my toy broke.", label: "Angry" },
    { text: "It is a sunny day.", label: "Neutral" },
    { text: "I can't wait to play!", label: "Happy" },
    { text: "I'm annoyed by the noise.", label: "Angry" },
    { text: "The book is on the table.", label: "Neutral" },
    { text: "That surprise made my day!", label: "Happy" },
    { text: "I'm mad about losing the game.", label: "Angry" },
    { text: "We have school tomorrow.", label: "Neutral" },
];

const OPTIONS = ["Happy", "Angry", "Neutral"];

export default function GuessGame() {
    const shuffled = useMemo(() => [...BANK].sort(() => Math.random() - 0.5), []);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [chosen, setChosen] = useState(null);

    const current = shuffled[index];
    const isDone = index >= shuffled.length;

    const pick = (opt) => {
        if (isDone || chosen) return;
        setChosen(opt);
        if (opt === current.label) setScore((s) => s + 1);
    };

    const next = () => {
        setChosen(null);
        setIndex((i) => i + 1);
    };

    const reset = () => {
        window.location.reload(); // simple way to reshuffle
    };

    if (isDone) {
        return (
            <div className="w-full max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">Game 2: Guess the Feeling</h3>
                <p className="mb-4">All sentences answered!</p>
                <div className="text-xl font-semibold mb-6">Final Score: {score} / {shuffled.length} 🎉</div>
                <button onClick={reset} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Play Again</button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Game 2: Guess the Feeling</h3>
            <p className="mb-6">Read the sentence and pick the emotion.</p>

            <div className="border rounded-2xl p-6 bg-white shadow mb-4 text-center">
                <div className="text-xl">“{current.text}”</div>
            </div>

            <div className="flex gap-3 justify-center mb-4">
                {OPTIONS.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => pick(opt)}
                        className={`px-4 py-2 rounded-xl border shadow bg-slate-50 hover:bg-slate-100 ${chosen === opt ? "ring-2 ring-purple-400" : ""
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            {chosen && (
                <div className="mb-4">
                    {chosen === current.label ? (
                        <div className="text-green-700 font-semibold">Correct! 🎯</div>
                    ) : (
                        <div className="text-red-700 font-semibold">Oops, it was {current.label}.</div>
                    )}
                </div>
            )}

            <div className="flex items-center justify-between">
                <div className="font-semibold">Score: {score}</div>
                <button
                    onClick={next}
                    disabled={!chosen}
                    className={`px-4 py-2 rounded-xl text-white ${chosen ? "bg-purple-500 hover:bg-purple-600" : "bg-purple-300 cursor-not-allowed"
                        }`}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}