// src/App.jsx
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Story from "./pages/Story";
import PlaygroundPage from "./pages/PlaygroundPage";
import Games from "./pages/Games";
import WrapUp from "./pages/WrapUp";
import Certificate from "./pages/Certificate";

function App() {
  const location = useLocation();

  const links = [
    { to: "/story", label: "📖 Story", color: "text-pink-600" },
    { to: "/games", label: "🕹️ Games", color: "text-green-600" },
    { to: "/playground", label: "🎮 Playground", color: "text-purple-600" },
    { to: "/wrapup", label: "🎁 Wrap Up", color: "text-yellow-700" },
  ];

  const hideNavbar = location.pathname === "/"; // hide on home page

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 font-sans">
      {/* Navbar */}
      {/* Navbar */}
      {!hideNavbar && (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 shadow-lg z-50">
          <div className="w-full flex justify-between items-center px-4 sm:px-8 py-4">
            {/* Logo */}
            <Link
              to="/"
              className="font-kids font-extrabold text-2xl text-pink-700 drop-shadow-lg hover:scale-110 transition-transform duration-300 font-[Fredoka] tracking-wide"
            >
              ☀️ Sunny 🤖
            </Link>

            {/* Links for desktop (sm+) */}
            <div className="hidden sm:flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`w-full py-2 rounded-2xl text-lg font-[Fredoka] shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-2 ${link.color} ${location.pathname === link.to
                    ? "bg-white shadow-lg border"
                    : "bg-white/70"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Only Playground for mobile & tablet */}
            <div className="sm:hidden">
              <Link
                to="/playground"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-3xl text-base sm:text-lg font-[Fredoka] shadow-md transition-transform duration-300 hover:scale-105 bg-white/80 text-purple-600"
              >
                <span className="text-xl sm:text-2xl">🎮</span>
                <span className="font-semibold">Playground</span>
              </Link>
            </div>
          </div>
        </nav>

      )}


      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {[
            { path: "/", element: <Home /> },
            { path: "/story", element: <Story /> },
            { path: "/games", element: <Games /> },
            { path: "/playground", element: <PlaygroundPage /> },

            { path: "/wrapup", element: <WrapUp /> },
            { path: "/certificate", element: <Certificate /> },
          ].map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                  className={`${!hideNavbar ? "pt-24" : "pt-0"} w-full`}
                >
                  {element}
                </motion.div>
              }
            />

          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
