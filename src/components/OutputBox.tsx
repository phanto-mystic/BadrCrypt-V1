import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  output: string;
}

export default function OutputBox({ output }: Props) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async (): Promise<void> => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          className="w-full rounded-lg p-4 bg-slate-800/50 border border-cyan-500/30 
                     text-cyan-100 resize-none font-mono text-sm"
          value={output}
          readOnly
          rows={5}
        />
        <div className="absolute bottom-3 right-3 text-xs text-slate-400">
          {output.length} chars
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={copyToClipboard}
          className="btn-primary flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}