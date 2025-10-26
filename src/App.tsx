import React, { useState } from "react";
import { Lock, Unlock, Info } from "lucide-react";
import CipherForm from "./components/CipherForm";
import Navigation from "./components/Navigation";
import InfoSection from "./components/InfoSection";
import { AppSection, NavItem } from "./types/navigation";

const navItems: NavItem[] = [
  {
    id: "encrypt",
    label: "Encrypt",
    icon: Lock,
    description: "Encrypt your messages"
  },
  {
    id: "decrypt",
    label: "Decrypt",
    icon: Unlock,
    description: "Decrypt your messages"
  },
  {
    id: "info",
    label: "About",
    icon: Info,
    description: "Learn about the system"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>("encrypt");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "encrypt":
      case "decrypt":
        return <CipherForm mode={activeSection} onModeChange={setActiveSection} />;
      case "info":
        return <InfoSection />;
      default:
        return <CipherForm mode="encrypt" onModeChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
              <Lock size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl font-black glow-text mb-2">
                BadrCrypt v1
              </h1>
              <p className="text-gray-400 text-sm font-medium">
                Personal Hybrid Encryption System
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Secure your messages with multi-layer encryption. 
            Built for privacy, running locally in your browser.
          </p>
        </div>

        {/* Navigation */}
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          navItems={navItems}
        />

        {/* Main Content */}
        <div className="glass-card p-6 sm:p-8">
          {renderActiveSection()}
        </div>

        {/* Footer */}
        <footer className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            Made with 💙 by Badr • Personal Encryption System v1.0
          </p>
          <p className="text-gray-500 text-xs">
            🔒 All processing happens locally in your browser • No data stored
          </p>
        </footer>
      </div>
    </div>
  );
}