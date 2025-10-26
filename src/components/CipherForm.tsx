import React, { useState } from "react";
import { Lock, Unlock, Shield } from "lucide-react";
import TextArea from "./TextArea";
import OutputBox from "./OutputBox";
import { encryptText, decryptText } from "../utils/cipherEngine";

interface CipherFormProps {
  mode: "encrypt" | "decrypt";
}

export default function CipherForm({ mode }: CipherFormProps) {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleProcess = async (): Promise<void> => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 200));
    
    try {
      const result = mode === "encrypt" ? encryptText(input) : decryptText(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error: Unable to process input");
    }
    
    setIsProcessing(false);
  };

  const clearAll = (): void => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="w-full space-y-6">
      {/* Mode Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3">
          {mode === "encrypt" ? (
            <Lock size={24} className="text-blue-400" />
          ) : (
            <Unlock size={24} className="text-cyan-400" />
          )}
          <h2 className="text-2xl font-bold text-white">
            {mode === "encrypt" ? "Encrypt Message" : "Decrypt Message"}
          </h2>
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <label className="block text-blue-300 font-semibold text-lg">
          {mode === "encrypt" ? "Message to Encrypt" : "Encrypted Message"}
        </label>
        <TextArea
          value={input}
          onChange={setInput}
          placeholder={
            mode === "encrypt" 
              ? "Enter your message here..." 
              : "Paste encrypted text here..."
          }
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={handleProcess}
          disabled={isProcessing || !input.trim()}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Shield size={18} />
              {mode === "encrypt" ? "Encrypt" : "Decrypt"}
            </>
          )}
        </button>

        <button
          onClick={clearAll}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          Clear All
        </button>
      </div>

      {/* Output Section */}
      {output && (
        <div className="space-y-3 animate-fade-in">
          <label className="block text-cyan-300 font-semibold text-lg">
            {mode === "encrypt" ? "Encrypted Result" : "Decrypted Result"}
          </label>
          <OutputBox output={output} />
        </div>
      )}
    </div>
  );
}