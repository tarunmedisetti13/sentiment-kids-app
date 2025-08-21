
import { useMemo, useState } from "react";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

const NEGATIVE_PROMPTS = [
    "I hate waking up early.",
    "This game is boring.",
    "My pencil is terrible.",
    "I'm sad about the result.",
    "The lunch tasted bad.",
];

const POSITIVE_HINTS = [
    "love", "enjoy", "great", "wonderful", "excited", "fun", "awesome", "happy"
];

export default function FixSentence() {
    const original = useMemo(() => NEGATIVE_PROMPTS[Math.floor(Math.random() * NEGATIVE_PROMPTS.length)], []);
    const [rewrite, setRewrite] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);

    const check = () => {
        const origScore = sentiment.analyze(original).score;
        const newScore = sentiment.analyze(rewrite).score;
        if (rewrite.trim().length === 0) {
            setFeedback({ ok: false, msg: "Try writing your positive version first!" });
            return;
        }
        if (newScore > 0 && newScore > origScore) {
            setFeedback({ ok: true, msg: "Nice! You turned the sentence positive! 🌈" });
            setScore(1);
        } else {
            setFeedback({ ok: false, msg: "Hmm, try adding positive words or removing negative ones." });
        }
    };

    const newPrompt = () => {
        window.location.reload();
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Game 3: Fix the Mood</h3>
            <p className="mb-4">Rewrite the negative sentence to make it sound positive.</p>

            <div className="border rounded-2xl p-4 bg-white shadow mb-3">
                <div className="text-sm text-slate-600">Original sentence</div>
                <div className="text-lg">“{original}”</div>
            </div>

            <textarea
                className="w-full border rounded-xl p-3 mb-3"
                rows={3}
                placeholder="Type your positive version here..."
                value={rewrite}
                onChange={(e) => setRewrite(e.target.value)}
            />

            <div className="flex gap-3 mb-4">
                <button onClick={check} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Check</button>
                <button onClick={newPrompt} className="px-4 py-2 bg-slate-200 rounded-xl hover:bg-slate-300">New Sentence</button>
            </div>

            {feedback && (
                <div className={`${feedback.ok ? "text-green-700" : "text-red-700"} font-semibold mb-3`}>
                    {feedback.msg}
                </div>
            )}

            <div className="text-sm text-slate-700">
                <div className="font-semibold mb-1">Helpful words to try:</div>
                <div className="flex flex-wrap gap-2">
                    {POSITIVE_HINTS.map((w) => (
                        <span key={w} className="px-2 py-1 bg-green-100 border border-green-300 rounded-full text-xs">{w}</span>
                    ))}
                </div>
            </div>

            <div className="mt-4 font-semibold">Score: {score} / 1</div>
        </div>
    );
}