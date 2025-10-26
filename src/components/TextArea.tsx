import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export default function TextArea({ value, onChange, placeholder, readOnly = false }: Props) {
  return (
    <div className="relative">
      <textarea
        className={`w-full rounded-lg p-4 border resize-none transition-colors duration-200 font-mono text-sm
          ${
            readOnly 
              ? "bg-slate-800/50 border-cyan-500/30 text-cyan-100" 
              : "bg-slate-800/30 border-blue-500/30 text-white focus:border-blue-400"
          }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={5}
      />
      
      <div className="absolute bottom-3 right-3 text-xs text-slate-400">
        {value.length} chars
      </div>
    </div>
  );
}