// src/pages/PlaygroundPage.jsx
import { useState } from "react";
import Sentiment from "sentiment";
import { motion } from "framer-motion";

const sentiment = new Sentiment();

export default function PlaygroundPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [emoji, setEmoji] = useState("🤖");

  const analyze = () => {
    const analysis = sentiment.analyze(text);
    if (analysis.score > 0) {
      setResult("Yay! That sounds Happy 😃");
      setEmoji("😃");
    } else if (analysis.score < 0) {
      setResult("Oh no! That feels Sad 😢");
      setEmoji("😢");
    } else {
      setResult("Hmm… That’s Neutral 😐");
      setEmoji("😐");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start pt-15 pb-10 bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100 text-center min-h-[calc(100vh-4rem)]">
      {/* Sunny character */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-8xl mb-6 drop-shadow-lg"
      >
        {emoji}
      </motion.div>

      {/* Title */}
      <h2 className="text-5xl font-fun text-purple-700 drop-shadow-md mb-3">
        🎮 Sunny’s Playground
      </h2>
      <p className="mb-6 text-lg font-kids text-gray-700">
        Type something and <span className="font-chewy text-pink-600">Sunny</span> will guess the feeling!
      </p>

      {/* Input box */}
      <motion.textarea
        whileFocus={{ scale: 1.05 }}
        className="resize-none border-4 border-purple-300 rounded-3xl p-4 sm:w-80 w-60  h-28 shadow-xl bg-white/90 font-kids text-lg focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      {/* Button */}
      <motion.button
        onClick={analyze}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 text-white text-xl font-bold rounded-3xl shadow-lg font-chewy cursor-pointer"
      >
        🔍 Let’s See!
      </motion.button>

      {/* Result bubble */}
      {result && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mt-10 relative max-w-xs bg-white rounded-[2rem] p-6 shadow-xl border-4 border-yellow-300 text-2xl font-fun text-purple-800"
        >
          {result}
          {/* little speech bubble tail */}
          <div className="absolute -bottom-4 left-12 w-8 h-8 bg-white border-l-4 border-b-4 border-yellow-300 rotate-45"></div>
        </motion.div>
      )}
    </div>
  );
}
