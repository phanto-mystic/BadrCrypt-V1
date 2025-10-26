import React from "react";

interface Props {
  mode: "encrypt" | "decrypt";
  setMode: (mode: "encrypt" | "decrypt") => void;
}

export default function ModeToggle({ mode, setMode }: Props) {
  return (
    <div className="flex justify-center">
      <div className="glass-card p-2 inline-flex gap-2">
        <button
          onClick={() => setMode("encrypt")}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
            mode === "encrypt"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25"
              : "bg-white/5 hover:bg-white/10 text-gray-300"
          }`}
        >
          <span>🔒</span>
          Encrypt
        </button>
        <button
          onClick={() => setMode("decrypt")}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
            mode === "decrypt"
              ? "bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg shadow-purple-500/25"
              : "bg-white/5 hover:bg-white/10 text-gray-300"
          }`}
        >
          <span>🔓</span>
          Decrypt
        </button>
      </div>
    </div>
  );
}