// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [goNext, setGoNext] = useState(false);
    const navigate = useNavigate();

    const handleJourney = () => {
        setGoNext(true);
        setTimeout(() => {
            navigate("/story"); // navigate AFTER animation
        }, 1000); // matches animation duration
    };

    return (
        <AnimatePresence>
            {!goNext && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-yellow-100 to-pink-200 px-4 sm:px-6"
                >
                    {/* Sunny character */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-6xl sm:text-8xl mb-4 sm:mb-6"
                    >
                        🤖
                    </motion.div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-700 mb-4 sm:mb-6 drop-shadow-lg leading-snug sm:leading-tight">
                        Learn Feelings with Sunny
                    </h1>

                    <p className="font-kids text-base sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-md sm:max-w-2xl leading-relaxed">
                        Hi! I'm <span className="font-bold text-pink-600">Sunny</span>. I can read
                        your words and guess if they sound
                        <span className="text-green-600 font-semibold"> happy</span>,
                        <span className="text-blue-600 font-semibold"> sad</span>, or{" "}
                        <span className="text-red-600 font-semibold"> angry</span>.
                        <br />
                        Let’s go on an adventure and learn about{" "}
                        <b>Sentiment Analysis</b> together!
                    </p>

                    {/* Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={handleJourney}
                        className="cursor-pointer w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg sm:text-xl font-bold rounded-3xl shadow-xl transition transform"
                    >
                        🚀 Start the Journey
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
