// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptTest from "./pages/PromptTest";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/test" element={<PromptTest />} />
        </Routes>
      </main>
    </div>
  );
}