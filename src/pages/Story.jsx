// src/pages/Story.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <div className="w-full flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-4 sm:p-8 text-center">

            {/* Sunny animated */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-6xl sm:text-8xl mb-4 sm:mb-6"
            >
                🤖
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 drop-shadow-md mb-4 sm:mb-6">
                Sunny’s Story 📖
            </h2>

            {/* Intro */}
            <p className="max-w-xs sm:max-w-3xl text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Sunny wants to make friends, but sometimes he doesn’t understand their
                <span className="font-bold text-purple-600"> feelings</span>.
                Luckily, he can learn with <b>Sentiment Analysis</b>!
            </p>

            {/* Example cards in a row */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-6 bg-white w-56 sm:w-60 flex items-center justify-center rounded-3xl shadow-lg border-2 border-green-300"
                >
                    <p className="text-sm sm:text-lg text-center">
                        “I love ice cream 🍦”<br />→ <span className="text-green-600 font-bold">Happy 😃</span>
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-6 bg-white w-56 sm:w-60 flex items-center justify-center rounded-3xl shadow-lg border-2 border-red-300"
                >
                    <p className="text-sm sm:text-lg text-center">
                        “I hate homework 😡”<br />→ <span className="text-red-600 font-bold">Angry 😠</span>
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-6 bg-white w-56 sm:w-60 flex items-center justify-center rounded-3xl shadow-lg border-2 border-blue-300"
                >
                    <p className="text-sm sm:text-lg text-center">
                        “I feel lonely today 😢”<br />→ <span className="text-blue-600 font-bold">Sad 😞</span>
                    </p>
                </motion.div>
            </div>

            {/* Button */}
            <Link
                to="/games"
                className="mb-8 w-full sm:w-auto inline-block px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white text-lg sm:text-xl font-bold rounded-3xl shadow-xl hover:scale-105 transform transition duration-300"
            >
                🎮 Try it Yourself →
            </Link>
        </div>
    );
}
