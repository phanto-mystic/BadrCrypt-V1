import React from 'react';
import { Shield, Lock, Key, Code2, Fingerprint, Cpu, Zap } from 'lucide-react';

export default function InfoSection() {
  const features = [
    {
      icon: Lock,
      title: "5-Layer Encryption",
      description: "Combines substitution, transposition, and polyalphabetic ciphers for maximum security",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Key,
      title: "Personal Key System",
      description: "Uses a unique encryption key derived from your personal input",
      gradient: "from-blue-500 to-cyan-300"
    },
    {
      icon: Code2,
      title: "Syllabic Substitution",
      description: "Replaces letters with unique syllables for enhanced obfuscation",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: Fingerprint,
      title: "Digital Signature",
      description: "Every message includes encrypted authentication markers",
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Local Processing",
      description: "All encryption happens in your browser - no data sent to servers",
      gradient: "from-cyan-600 to-blue-500"
    },
    {
      icon: Cpu,
      title: "Hybrid Algorithm",
      description: "Multiple encryption methods working together for robust security",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-blue-500/20">
          <Zap size={16} />
          <span>Secure Encryption Technology</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          BadrCrypt v1
        </h2>
        
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A sophisticated hybrid cipher system combining multiple encryption layers to create 
          secure, human-readable messages that only you and your intended recipient can decrypt.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full shadow shadow-cyan-400/30"></div>
      </div>

      {/* Features Grid */}
      <div className="animate-fade-in">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative glass-card-hover p-8 h-full flex flex-col items-center text-center group-hover:transform group-hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
                  
                  {/* Decorative Line */}
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${feature.gradient} mt-4 rounded-full shadow shadow-cyan-400/30`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Example Section */}
      <div className="animate-fade-in">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-3">See It In Action</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch your messages transform through our multi-layer encryption process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Encryption Example */}
          <div className="glass-card p-8 relative overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow shadow-cyan-400/30"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow shadow-cyan-500/30">
                <Lock size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Encryption Process</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="text-sm font-medium">Original Message</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl backdrop-blur-sm">
                  <code className="text-cyan-300 font-mono text-lg">HELLO WORLD</code>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow shadow-cyan-500/30">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="text-sm font-medium">Encrypted Output</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl backdrop-blur-sm">
                  <code className="text-blue-300 font-mono text-sm break-all">zafolopuxixijanujafodu pelalotivo pulagajako</code>
                </div>
              </div>
            </div>
          </div>

          {/* Security Benefits */}
          <div className="glass-card p-8 relative overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 shadow shadow-blue-500/30"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow shadow-blue-500/30">
                <Shield size={20} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Security Features</h4>
            </div>
            
            <div className="space-y-4">
              {[
                "No external servers involved",
                "Your key never leaves your device",
                "Real-time encryption processing",
                "Human-readable encrypted output",
                "Multiple cipher layers protection",
                "End-to-end encryption guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow shadow-cyan-500/30 group-hover/item:scale-110 transition-transform duration-200">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover/item:text-cyan-100 transition-colors duration-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <p className="text-sm text-cyan-100 text-center">
                <strong className="text-cyan-50">Remember:</strong> Your encryption key is safe and secure. Without it, messages cannot be decrypted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="text-center animate-fade-in">
        <div className="glass-card p-8 max-w-4xl mx-auto border border-gray-700/50 hover:border-cyan-500/30 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Why Choose BadrCrypt?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto shadow shadow-cyan-400/30">
                <Shield size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-cyan-100">Military-Grade Security</h4>
              <p className="text-gray-400 text-sm">Multiple encryption layers for maximum protection</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto shadow shadow-blue-500/30">
                <Cpu size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-cyan-100">Local Processing</h4>
              <p className="text-gray-400 text-sm">Everything happens on your device, no cloud involved</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto shadow shadow-cyan-500/30">
                <Key size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-cyan-100">Your Keys, Your Data</h4>
              <p className="text-gray-400 text-sm">Complete control over your encryption keys</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}