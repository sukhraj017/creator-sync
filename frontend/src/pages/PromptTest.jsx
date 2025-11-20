// src/pages/PromptTest.jsx

import React, { useState } from "react";

export default function PromptTest() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Test Your Prompt</h1>

      <div className="max-w-3xl mx-auto">
        <label className="block mb-2 text-gray-300">
          Enter your video description:
        </label>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="
            w-full 
            h-48 
            p-4 
            rounded-xl 
            bg-[#1a1a1d] 
            text-white 
            placeholder-gray-500 
            outline-none 
            border border-gray-700 
            focus:border-purple-500 
            transition
          "
          placeholder="Describe your video idea (e.g., Make a travel vlog with upbeat energy)..."
        />

        <button
          className="
            mt-6 
            px-6 py-3 
            rounded-xl 
            bg-gradient-to-r from-purple-500 to-blue-500 
            text-white font-semibold 
            hover:opacity-90 
            transition
          "
        >
          Send to Engine
        </button>
      </div>
    </div>
  );
}