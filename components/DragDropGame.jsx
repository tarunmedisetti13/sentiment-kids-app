import { useState } from "react";

const INITIAL_ITEMS = [
    { id: 1, text: "I love my new bicycle!", label: "Happy" },
    { id: 2, text: "I hate broccoli.", label: "Angry" },
    { id: 3, text: "Today is okay, I guess.", label: "Neutral" },
    { id: 4, text: "I'm so excited for the trip!", label: "Happy" },
    { id: 5, text: "I'm upset about the test.", label: "Angry" },
    { id: 6, text: "The sky is blue.", label: "Neutral" },
];

const BUCKETS = [
    { key: "Happy", emoji: "😃", color: "bg-green-100 border-green-400" },
    { key: "Angry", emoji: "😠", color: "bg-red-100 border-red-400" },
    { key: "Neutral", emoji: "😐", color: "bg-gray-100 border-gray-400" },
];

export default function DragDropGame() {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [placed, setPlaced] = useState({}); // id -> bucket
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);

    const onDragStart = (e, id) => {
        e.dataTransfer.setData("text/plain", String(id));
    };

    const onDrop = (e, bucketKey) => {
        const id = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const item = items.find((i) => i.id === id);
        if (!item || placed[id]) return;

        const correct = item.label === bucketKey;
        setPlaced((prev) => ({ ...prev, [id]: bucketKey }));
        if (correct) setScore((s) => s + 1);

        const allPlaced = Object.keys({ ...placed, [id]: bucketKey }).length === items.length;
        if (allPlaced) setDone(true);
    };

    const reset = () => {
        setItems(INITIAL_ITEMS);
        setPlaced({});
        setScore(0);
        setDone(false);
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Game 1: Drag & Drop the Feelings</h3>
            <p className="mb-6">Drag each sentence card into the correct bucket: Happy, Angry, or Neutral.</p>

            {/* Cards */}
            <div className="flex flex-wrap gap-3 mb-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        draggable={!placed[item.id]}
                        onDragStart={(e) => onDragStart(e, item.id)}
                        className={`cursor-move select-none border rounded-xl p-3 shadow-sm bg-white w-[260px] ${placed[item.id] ? "opacity-60 line-through" : ""
                            }`}
                        title="Drag me!"
                    >
                        {item.text}
                    </div>
                ))}
            </div>

            {/* Buckets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BUCKETS.map((b) => (
                    <div
                        key={b.key}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDrop(e, b.key)}
                        className={`border-2 ${b.color} rounded-2xl p-4 min-h-[160px] flex flex-col`}
                    >
                        <div className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span>{b.emoji}</span> {b.key}
                        </div>
                        <div className="flex flex-col gap-2">
                            {Object.entries(placed)
                                .filter(([, bucket]) => bucket === b.key)
                                .map(([id]) => {
                                    const it = items.find((x) => x.id === Number(id));
                                    const correct = it?.label === b.key;
                                    return (
                                        <div
                                            key={id}
                                            className={`text-sm border rounded-lg p-2 ${correct ? "bg-white" : "bg-yellow-50"
                                                }`}
                                        >
                                            {it?.text}
                                            {!correct && (
                                                <span className="ml-2 text-xs text-yellow-700">(maybe not {b.key} 🤔)</span>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Score */}
            <div className="mt-6 flex items-center gap-4">
                <div className="text-lg font-semibold">Score: {score} / {items.length}</div>
                <button onClick={reset} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Reset</button>
                {done && (
                    <span className="text-green-700 font-semibold">Great job! 🎉</span>
                )}
            </div>
        </div>
    );
}



