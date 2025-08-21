// src/pages/Certificate.jsx
import { Link, useLocation } from "react-router-dom";

export default function Certificate() {
    const location = useLocation();
    const { totalStars = 0, totalQuestions = 0 } = location.state || {};
    const maxStars = totalQuestions; // dynamic instead of hardcoded

    return (
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-10 text-center bg-gradient-to-b from-purple-100 to-yellow-100 min-h-screen kids-font">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">🎉 Congratulations! 🎉</h1>
            <p className="text-base sm:text-lg mb-6">
                You finished all the games and learned about{" "}
                <span className="font-semibold">emotions</span>!
            </p>

            {/* Stars */}
            <div className="mb-6">
                <p className="font-semibold text-lg sm:text-xl mb-2">
                    Total Stars Earned: {totalStars}/{maxStars}
                </p>
                <div className="flex justify-center flex-wrap gap-1">
                    {[...Array(totalStars)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl sm:text-3xl">
                            ⭐
                        </span>
                    ))}
                </div>
            </div>

            {/* Badge */}
            <div className="inline-block px-6 sm:px-8 py-4 bg-yellow-300 rounded-2xl shadow-lg mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">🏅 Sentiment Hero Badge</h2>
                <p className="text-sm sm:text-base text-gray-700 mt-2">
                    Awarded for mastering moods & emotions!
                </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to="/"
                    className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 text-base sm:text-lg"
                >
                    🔄 Play Again
                </Link>
            </div>
        </div>
    );
}
