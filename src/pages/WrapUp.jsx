// src/pages/WrapUp.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { gamesData } from "./Games";

export default function WrapUp() {
    const location = useLocation();
    const { gameScores = [] } = location.state || [];

    const [showLearn, setShowLearn] = useState(false);

    // Only show last 2 games played
    const lastGames = gameScores.slice(-2);

    // Total correct answers for these games
    const totalCorrect = lastGames.reduce((acc, g) => acc + g.score, 0);

    // Total questions for these games
    const totalQuestions = lastGames.reduce((acc, g) => {
        const game = gamesData.find((game) => game.title === g.game);
        return acc + (game?.questions.slice(0, 10).length || 0);
    }, 0);

    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen pt-20 pb-10 px-4 sm:px-6 md:px-10 text-center bg-gradient-to-b from-yellow-50 to-pink-100 kids-font">
            <h2 className="text-3xl sm:text-4xl font-bold my-5 mt-5">Great Job 🎉</h2>
            <p className="text-lg sm:text-xl mb-6">You completed the games! 🕹️</p>

            {/* Show "What I Learned" button first */}
            {!showLearn ? (
                <button
                    onClick={() => setShowLearn(true)}
                    className="cursor-pointer mb-6 px-6 py-3 bg-purple-500 text-white rounded-2xl shadow font-bold transform transition duration-300 hover:scale-105 hover:bg-purple-600"
                >
                    📘 What I Learned
                </button>
            ) : (
                <>
                    {/* Learning message */}
                    <p className="text-base sm:text-lg mb-6 max-w-xl bg-white p-4 rounded-2xl shadow-lg border-2 border-pink-300">
                        You learned that computers can read words and guess feelings using{" "}
                        <b>Sentiment Analysis</b>! This helps in chatbots, reviews, and even
                        social media. Now you know how AI can understand feelings! 💡
                    </p>

                    {/* Badges per game */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mb-6">
                        {lastGames.map((g, i) => {
                            const game = gamesData.find((game) => game.title === g.game);
                            const questionsCount = game?.questions.slice(0, 10).length || 0;

                            let badge;
                            if (g.score === questionsCount) badge = "🥇 Gold Star!";
                            else if (g.score >= Math.floor(questionsCount * 0.7)) badge = "🥈 Silver Star!";
                            else badge = "⭐ Keep Trying!";

                            return (
                                <div
                                    key={i}
                                    className="p-6 bg-white rounded-2xl shadow-lg border-4 border-yellow-300"
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">{g.game}</h3>
                                    <p className="text-base sm:text-lg">Your Score: {g.score} / {questionsCount}</p>
                                    <p className="text-xl sm:text-2xl mt-2">{badge}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center">
                        <Link
                            to="/"
                            className="cursor-pointer px-6 py-3 bg-pink-500 text-white rounded-2xl shadow hover:bg-pink-600 text-base sm:text-lg"
                        >
                            🔄 Play Again
                        </Link>
                        <Link
                            to="/certificate"
                            state={{ totalStars: totalCorrect, totalQuestions }}
                            className="px-6 py-3 bg-yellow-500 text-white rounded-2xl shadow hover:bg-yellow-600 text-base sm:text-lg"
                        >
                            🎓 Get Certificate
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
