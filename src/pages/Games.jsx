// src/pages/Games.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const gamesData = [
    {
        title: "🎯 Guess the Emotion Game 🎉",
        questions: [
            { text: "I got a big ice cream!", answer: "Happy" },
            { text: "I lost my favorite toy.", answer: "Sad" },
            { text: "Stop pushing me!", answer: "Angry" },
            { text: "I got a surprise gift!", answer: "Happy" },
            { text: "I miss my mom and dad.", answer: "Sad" },
            { text: "Someone broke my drawing.", answer: "Angry" },
            { text: "I won a game!", answer: "Happy" },
            { text: "My balloon popped.", answer: "Sad" },
            { text: "My friend didn’t share.", answer: "Angry" },
            { text: "We are going to the park!", answer: "Happy" },
            { text: "I spilled my juice.", answer: "Sad" },
            { text: "I built a tall tower with blocks!", answer: "Happy" },
            { text: "My ice cream fell on the floor.", answer: "Sad" },
            { text: "Someone took my seat.", answer: "Angry" },
            { text: "I saw a rainbow!", answer: "Happy" },
            { text: "My pet ran away.", answer: "Sad" },
            { text: "My friend called me a name.", answer: "Angry" },
            { text: "I got a gold star in class!", answer: "Happy" },
            { text: "I missed the school bus.", answer: "Sad" },
            { text: "Someone broke my toy car.", answer: "Angry" },
            { text: "I baked cookies!", answer: "Happy" },
            { text: "I dropped my sandwich.", answer: "Sad" },
            { text: "My brother messed up my drawing.", answer: "Angry" },
            { text: "I learned a new song!", answer: "Happy" },
            { text: "I lost my favorite pencil.", answer: "Sad" },
            { text: "Someone shouted at me.", answer: "Angry" },
            { text: "I got a new book!", answer: "Happy" },
            { text: "It rained and I forgot my umbrella.", answer: "Sad" },
            { text: "My sister broke my toy.", answer: "Angry" },
            { text: "I played with my friends.", answer: "Happy" },
            { text: "I dropped my ice cream cone.", answer: "Sad" },
            { text: "Someone called me a liar.", answer: "Angry" },
            { text: "I painted a beautiful picture!", answer: "Happy" },
            { text: "I lost my favorite sticker.", answer: "Sad" },
            { text: "My friend took my toy without asking.", answer: "Angry" },
            { text: "I finished my puzzle!", answer: "Happy" },
            { text: "I forgot my homework at home.", answer: "Sad" },
            { text: "Someone teased me.", answer: "Angry" },
            { text: "I got a hug from my mom!", answer: "Happy" },
            { text: "I dropped my backpack.", answer: "Sad" },
            { text: "Someone broke my chair.", answer: "Angry" },
            { text: "I played a fun game!", answer: "Happy" },
            { text: "I lost my favorite hat.", answer: "Sad" },
            { text: "Someone ignored me.", answer: "Angry" },
            { text: "I got a shiny sticker!", answer: "Happy" },
            { text: "I fell while running.", answer: "Sad" },
            { text: "Someone pushed me.", answer: "Angry" },
            { text: "I danced to my favorite song!", answer: "Happy" },
            { text: "My sandwich fell on the floor.", answer: "Sad" },
            { text: "My friend broke my toy car.", answer: "Angry" },
            { text: "I got a new backpack!", answer: "Happy" },
            { text: "I lost my gloves.", answer: "Sad" },
            { text: "Someone shouted at me in class.", answer: "Angry" },
            { text: "I learned a new word!", answer: "Happy" },
            { text: "I spilled my water bottle.", answer: "Sad" },
            { text: "My brother broke my blocks.", answer: "Angry" },
            { text: "I played outside with friends!", answer: "Happy" },
            { text: "I forgot my lunch.", answer: "Sad" },
            { text: "Someone teased me on the playground.", answer: "Angry" },
            { text: "I saw a butterfly!", answer: "Happy" },
            { text: "I lost my favorite toy car.", answer: "Sad" },
            { text: "Someone yelled at me.", answer: "Angry" },
            { text: "I got a gold star for my drawing!", answer: "Happy" },
            { text: "I dropped my ice cream.", answer: "Sad" },
            { text: "My friend did not share.", answer: "Angry" },
            { text: "I got a new ball!", answer: "Happy" },
            { text: "I missed my favorite TV show.", answer: "Sad" },
            { text: "Someone broke my sandcastle.", answer: "Angry" },
            { text: "I sang a new song!", answer: "Happy" },
            { text: "I spilled my paint.", answer: "Sad" },
            { text: "Someone called me mean names.", answer: "Angry" },
            { text: "I built a Lego tower!", answer: "Happy" },
            { text: "I lost my eraser.", answer: "Sad" },
            { text: "Someone teased me about my drawing.", answer: "Angry" },
            { text: "I made a new friend!", answer: "Happy" },
            { text: "I dropped my snack.", answer: "Sad" },
            { text: "Someone took my seat.", answer: "Angry" },
            { text: "I helped my friend!", answer: "Happy" },
            { text: "I lost my hat.", answer: "Sad" },
            { text: "Someone pushed me on the swing.", answer: "Angry" },
            { text: "I found a pretty shell!", answer: "Happy" },
            { text: "I forgot my homework notebook.", answer: "Sad" },
            { text: "Someone broke my crayon.", answer: "Angry" },
            { text: "I played with my puppy!", answer: "Happy" },
            { text: "I spilled my milk.", answer: "Sad" },
            { text: "My sister broke my toy.", answer: "Angry" },
            { text: "I got a balloon!", answer: "Happy" },
            { text: "I lost my favorite pen.", answer: "Sad" },
            { text: "Someone shouted at me.", answer: "Angry" },
            { text: "I drew a funny picture!", answer: "Happy" },
            { text: "I dropped my cookie.", answer: "Sad" },
            { text: "My friend did not play fair.", answer: "Angry" },
            { text: "I got a new puzzle!", answer: "Happy" },
            { text: "I forgot my shoes at school.", answer: "Sad" },
            { text: "Someone teased me in class.", answer: "Angry" },
            { text: "I had a fun picnic!", answer: "Happy" },
            { text: "I dropped my toy truck.", answer: "Sad" },
            { text: "Someone broke my cup.", answer: "Angry" },
            { text: "I learned a new game!", answer: "Happy" },
            { text: "I lost my scarf.", answer: "Sad" },
            { text: "Someone took my toy.", answer: "Angry" },
            { text: "I baked cookies with mom!", answer: "Happy" },
            { text: "I spilled my juice box.", answer: "Sad" },
            { text: "My brother messed up my puzzle.", answer: "Angry" },
        ],

        options: ["Happy", "Sad", "Angry"], // Game-level options
    },
    {
        title: "🌈 Color Feelings Game 🎨",
        questions: [
            { text: "The grass outside is...", answer: "Green", options: ["Green", "Blue", "Red"] },
            { text: "The sun on a hot day is...", answer: "Yellow", options: ["Yellow", "Orange", "Purple"] },
            { text: "Roses are...", answer: "Red", options: ["Red", "Pink", "Blue"] },
            { text: "The night sky is...", answer: "Black", options: ["Black", "White", "Green"] },
            { text: "Oranges are...", answer: "Orange", options: ["Orange", "Yellow", "Brown"] },
            { text: "Clouds in the sky are...", answer: "White", options: ["White", "Gray", "Blue"] },
            { text: "Blueberries are...", answer: "Blue", options: ["Blue", "Purple", "Red"] },
            { text: "Chocolate is...", answer: "Brown", options: ["Brown", "Black", "Orange"] },
            { text: "A watermelon’s skin is...", answer: "Green", options: ["Green", "Pink", "Yellow"] },
            { text: "Grapes can be...", answer: "Purple", options: ["Purple", "Red", "Blue"] },
            { text: "A pumpkin is...", answer: "Orange", options: ["Orange", "Yellow", "Green"] },
            { text: "Strawberries are...", answer: "Red", options: ["Red", "Pink", "Green"] },
            { text: "The sky is...", answer: "Blue", options: ["Blue", "Purple", "Gray"] },
            { text: "Lemons are...", answer: "Yellow", options: ["Yellow", "Orange", "Green"] },
            { text: "Coal is...", answer: "Black", options: ["Black", "White", "Gray"] },
            { text: "Milk is...", answer: "White", options: ["White", "Yellow", "Blue"] },
            { text: "Carrots are...", answer: "Orange", options: ["Orange", "Red", "Yellow"] },
            { text: "Plums are...", answer: "Purple", options: ["Purple", "Red", "Blue"] },
            { text: "Apples can be...", answer: "Red", options: ["Red", "Green", "Yellow"] },
            { text: "Bananas are...", answer: "Yellow", options: ["Yellow", "Green", "Orange"] },
            { text: "Cucumbers are...", answer: "Green", options: ["Green", "Blue", "Red"] },
            { text: "Eggplants are...", answer: "Purple", options: ["Purple", "Blue", "Black"] },
            { text: "Sand is...", answer: "Yellow", options: ["Yellow", "Brown", "White"] },
            { text: "Orchids can be...", answer: "Pink", options: ["Pink", "Red", "Purple"] },
            { text: "Rabbits can be...", answer: "White", options: ["White", "Gray", "Brown"] },
            { text: "The ocean is...", answer: "Blue", options: ["Blue", "Green", "Black"] },
            { text: "Brick walls are...", answer: "Red", options: ["Red", "Orange", "Brown"] },
            { text: "Sunflowers are...", answer: "Yellow", options: ["Yellow", "Orange", "Red"] },
            { text: "The moon is...", answer: "White", options: ["White", "Yellow", "Gray"] },
            { text: "Peaches are...", answer: "Orange", options: ["Orange", "Pink", "Yellow"] },
            { text: "A frog is...", answer: "Green", options: ["Green", "Blue", "Brown"] },
            { text: "Cherries are...", answer: "Red", options: ["Red", "Purple", "Yellow"] },
            { text: "The sky at sunset is...", answer: "Orange", options: ["Orange", "Pink", "Red"] },
            { text: "Tulips can be...", answer: "Pink", options: ["Pink", "Yellow", "White"] },
            { text: "Crows are...", answer: "Black", options: ["Black", "Gray", "Brown"] },
            { text: "Cabbage leaves are...", answer: "Green", options: ["Green", "Purple", "Blue"] },
            { text: "A lemon slice is...", answer: "Yellow", options: ["Yellow", "Orange", "White"] },
            { text: "Strawberries jam is...", answer: "Red", options: ["Red", "Pink", "Brown"] },
            { text: "The polar bear is...", answer: "White", options: ["White", "Gray", "Black"] },
            { text: "The sky on a clear day is...", answer: "Blue", options: ["Blue", "Green", "Yellow"] },
            { text: "A ripe mango is...", answer: "Orange", options: ["Orange", "Yellow", "Red"] },
            { text: "A violet flower is...", answer: "Purple", options: ["Purple", "Pink", "Blue"] },
            { text: "Watermelon flesh is...", answer: "Red", options: ["Red", "Green", "Pink"] },
            { text: "A lime is...", answer: "Green", options: ["Green", "Yellow", "Orange"] },
            { text: "A golden coin is...", answer: "Yellow", options: ["Yellow", "Brown", "Orange"] },
            { text: "A blueberry pie is...", answer: "Blue", options: ["Blue", "Purple", "Red"] },
            { text: "The soil is...", answer: "Brown", options: ["Brown", "Black", "Red"] },
            { text: "A rose can be...", answer: "Red", options: ["Red", "Pink", "White"] },
            { text: "The rainbow has...", answer: "Red", options: ["Red", "Blue", "Green"] },
            { text: "The rainbow has...", answer: "Orange", options: ["Orange", "Yellow", "Purple"] },
            { text: "The rainbow has...", answer: "Yellow", options: ["Yellow", "Red", "Blue"] },
            { text: "The rainbow has...", answer: "Green", options: ["Green", "Purple", "Pink"] },
            { text: "The rainbow has...", answer: "Blue", options: ["Blue", "Yellow", "Red"] },
            { text: "The rainbow has...", answer: "Purple", options: ["Purple", "Orange", "Green"] },
            { text: "A fox is...", answer: "Orange", options: ["Orange", "Red", "Brown"] },
            { text: "A panda is...", answer: "Black", options: ["Black", "White", "Gray"] },
            { text: "A flamingo is...", answer: "Pink", options: ["Pink", "Red", "White"] },
            { text: "A lemon candy is...", answer: "Yellow", options: ["Yellow", "Green", "Orange"] },
            { text: "A blueberry candy is...", answer: "Blue", options: ["Blue", "Purple", "Red"] },
            { text: "A grape candy is...", answer: "Purple", options: ["Purple", "Blue", "Red"] },
            { text: "A chocolate bar is...", answer: "Brown", options: ["Brown", "Black", "Yellow"] },
            { text: "An apple can be...", answer: "Green", options: ["Green", "Red", "Yellow"] },
            { text: "A pumpkin candy is...", answer: "Orange", options: ["Orange", "Yellow", "Red"] },
            { text: "A tulip can be...", answer: "Red", options: ["Red", "Pink", "White"] },
            { text: "The polar ice is...", answer: "White", options: ["White", "Blue", "Gray"] },
            { text: "The coal is...", answer: "Black", options: ["Black", "Gray", "Brown"] },
            { text: "A blueberry muffin is...", answer: "Blue", options: ["Blue", "Purple", "Red"] },
            { text: "A sunflower petal is...", answer: "Yellow", options: ["Yellow", "Orange", "Red"] },
            { text: "A strawberry leaf is...", answer: "Green", options: ["Green", "Yellow", "Red"] },
            { text: "A cherry pie is...", answer: "Red", options: ["Red", "Pink", "Orange"] },
            { text: "A violet flower is...", answer: "Purple", options: ["Purple", "Pink", "Blue"] },
            { text: "A carrot is...", answer: "Orange", options: ["Orange", "Yellow", "Brown"] },
            { text: "The night sky is...", answer: "Black", options: ["Black", "Blue", "Gray"] },
            { text: "Snow is...", answer: "White", options: ["White", "Gray", "Blue"] },
            { text: "A pumpkin pie is...", answer: "Orange", options: ["Orange", "Yellow", "Brown"] },
            { text: "A lemon pie is...", answer: "Yellow", options: ["Yellow", "Green", "Orange"] },
            { text: "A grape jelly is...", answer: "Purple", options: ["Purple", "Blue", "Red"] },
            { text: "A chocolate cake is...", answer: "Brown", options: ["Brown", "Black", "Orange"] },
            { text: "A watermelon slice is...", answer: "Red", options: ["Red", "Green", "Pink"] },
            { text: "Grasshoppers are...", answer: "Green", options: ["Green", "Yellow", "Brown"] },
            { text: "A strawberry candy is...", answer: "Red", options: ["Red", "Pink", "Orange"] },
            { text: "A banana candy is...", answer: "Yellow", options: ["Yellow", "Green", "Orange"] },
            { text: "A blueberry candy is...", answer: "Blue", options: ["Blue", "Purple", "Red"] },
            { text: "A carrot candy is...", answer: "Orange", options: ["Orange", "Red", "Yellow"] },
            { text: "An eggplant is...", answer: "Purple", options: ["Purple", "Blue", "Black"] },
            { text: "A polar bear is...", answer: "White", options: ["White", "Gray", "Black"] },
            { text: "A crow is...", answer: "Black", options: ["Black", "White", "Gray"] },
            { text: "A rose can be...", answer: "Pink", options: ["Pink", "Red", "White"] },
            { text: "Sunflowers are...", answer: "Yellow", options: ["Yellow", "Orange", "Red"] },
            { text: "The sky is...", answer: "Blue", options: ["Blue", "Green", "Purple"] },
            { text: "Grass is...", answer: "Green", options: ["Green", "Yellow", "Blue"] },
            { text: "A pumpkin is...", answer: "Orange", options: ["Orange", "Yellow", "Red"] },
            { text: "Grapes can be...", answer: "Purple", options: ["Purple", "Blue", "Red"] },
            { text: "A cherry is...", answer: "Red", options: ["Red", "Pink", "Green"] },
            { text: "Bananas are...", answer: "Yellow", options: ["Yellow", "Green", "Orange"] },
            { text: "The night is...", answer: "Black", options: ["Black", "Blue", "Gray"] },
            { text: "Milk is...", answer: "White", options: ["White", "Yellow", "Blue"] },
        ],
    },
];
export default function Games() {
    const [gameIndex, setGameIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [qIndex, setQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [gameScores, setGameScores] = useState([]);
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const navigate = useNavigate();

    const currentGame = gamesData[gameIndex];

    // Pick 10 random unique questions when the game changes
    useEffect(() => {
        if (currentGame) {
            const shuffled = [...currentGame.questions].sort(() => 0.5 - Math.random());
            setCurrentQuestions(shuffled.slice(0, 10));
            setQIndex(0);
            setScore(0);
            setFeedback("");
        }
    }, [gameIndex]);

    const currentQ = currentQuestions[qIndex];
    const options = currentQ?.options || currentGame.options || [];

    const handleAnswer = (choice) => {
        if (!currentQ) return;
        setSelectedOption(choice);
        const correct = choice === currentQ.answer;
        if (correct) {
            setScore(score + 1);
            setFeedback("✅ Yay! Correct!");
        } else {
            setFeedback(`❌ Oops! The correct answer was: ${currentQ.answer}`);
        }
    };

    const handleNext = () => {
        setSelectedOption(null);
        if (qIndex + 1 < currentQuestions.length) {
            setQIndex(qIndex + 1);
            setFeedback("");
        } else {
            setGameScores((prev) => [...prev, { game: currentGame.title, score }]);

            if (gameIndex + 1 < gamesData.length) {
                setGameIndex(gameIndex + 1);
            } else {
                navigate("/wrapup", {
                    state: { gameScores: [...gameScores, { game: currentGame.title, score }] },
                });
            }
        }
    };

    if (!currentQ) return <p>Loading...</p>;

    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 md:px-10 text-center kids-font bg-gradient-to-br from-yellow-100 to-pink-100">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">{currentGame.title}</h2>

            <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-md mx-auto border-4 border-yellow-300">
                <p className="text-lg font-semibold text-gray-600 mb-2">
                    Question {qIndex + 1} of {currentQuestions.length}
                </p>

                <p className="text-xl sm:text-2xl font-semibold mb-6 text-blue-600">{currentQ.text}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    {options.map((option) => {
                        let bgColor = "bg-pink-400"; // default button color

                        if (selectedOption) {
                            if (option === currentQ.answer) bgColor = "bg-green-500"; // correct answer
                            else if (option === selectedOption && option !== currentQ.answer) bgColor = "bg-red-500"; // wrong answer
                            else bgColor = "bg-gray-300"; // disabled other options
                        }

                        return (
                            <button
                                key={option}
                                onClick={() => !selectedOption && handleAnswer(option)}
                                className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-white text-base sm:text-lg font-bold rounded-2xl transform transition duration-200 active:scale-95 ${bgColor} ${!selectedOption ? "hover:bg-pink-500" : ""}`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>


                {feedback && <p className="text-lg sm:text-xl font-bold mb-4">{feedback}</p>}

                {feedback && (
                    <button
                        onClick={handleNext}
                        className="cursor-pointer mt-3 px-6 py-3 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transform transition duration-200 active:scale-95"
                    >
                        Next ➡️
                    </button>
                )}
            </div>
        </div>
    );
}