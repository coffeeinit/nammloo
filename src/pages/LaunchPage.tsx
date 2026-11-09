import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Droplets, Brush, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const LaunchPage = () => {
  const navigate = useNavigate();
  const [isLaunching, setIsLaunching] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Enhanced cleaning sound effects using Web Audio API
  const playLaunchSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create water spray sound
    const createWaterSpray = (delay = 0) => {
      setTimeout(() => {
        const bufferSize = audioContext.sampleRate * 0.8;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.5;
        }
        
        const noise = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        noise.buffer = noiseBuffer;
        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(2000, audioContext.currentTime);
        filter.Q.setValueAtTime(0.5, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.8);
        
        noise.start(audioContext.currentTime);
        noise.stop(audioContext.currentTime + 0.8);
      }, delay);
    };
    
    // Create scrubbing sound
    const createScrubbing = (delay = 0) => {
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(150 + Math.random() * 100, audioContext.currentTime);
            oscillator.type = 'square';
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(300, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
          }, i * 100);
        }
      }, delay);
    };
    
    // Create bubble popping sounds
    const createBubbles = (delay = 0) => {
      setTimeout(() => {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
          }, i * 80);
        }
      }, delay);
    };
    
    // Create swoosh cleaning sound
    const createSwoosh = (delay = 0) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.6);
        oscillator.type = 'triangle';
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
      }, delay);
    };
    
    // Create sparkling clean sound
    const createSparkle = (delay = 0) => {
      const frequencies = [659.25, 783.99, 987.77, 1174.66]; // E5, G5, B5, D6
      
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.4);
        }, delay + (index * 120));
      });
    };
    
    // Play cleaning sequence
    createWaterSpray(0);        // Water spray
    createScrubbing(300);       // Scrubbing sounds
    createBubbles(600);         // Bubble pops
    createSwoosh(1000);         // Swoosh clean
    createSparkle(1800);        // Sparkling clean finish
  };

  const handleLaunch = () => {
    setIsLaunching(true);
    playLaunchSound();
    
    // Simulate launch sequence
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
    
    // Reset after animation and navigate to home
    setTimeout(() => {
      setIsLaunching(false);
      setShowSuccess(false);
      // Navigate to the main app
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Floating soap bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute w-3 h-3 bg-white border border-blue-200 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Cleaning animation overlay */}
      {isLaunching && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200 flex flex-col items-center justify-center z-50">
          <div className="relative flex flex-col items-center justify-center w-full h-full" style={{minHeight: '100vh'}}>
            {/* Mirror (center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              {/* Mirror SVG */}
              <svg width="260" height="260" viewBox="0 0 260 260">
                <defs>
                  <radialGradient id="mirrorGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
                  </radialGradient>
                </defs>
                <ellipse cx="130" cy="130" rx="120" ry="120" fill="url(#mirrorGradient)" stroke="#e0e7ef" strokeWidth="8" />
                <ellipse cx="110" cy="110" rx="30" ry="18" fill="#fff" opacity="0.15" />
                <ellipse cx="170" cy="90" rx="18" ry="10" fill="#fff" opacity="0.10" />
              </svg>
              {/* Scrubbing Animation (scrubber and bubbles) */}
              <div className="absolute left-1/2 top-1/2 animate-scrub-mirror" style={{width: '3.5rem', height: '3.5rem', marginLeft: '-1.75rem', marginTop: '-1.75rem'}}>
                {/* Scrubber (sponge) */}
                <svg viewBox="0 0 48 48" width="48" height="48">
                  <ellipse cx="24" cy="24" rx="16" ry="10" fill="#f6e27a" stroke="#e2c275" strokeWidth="2"/>
                  <ellipse cx="24" cy="24" rx="12" ry="7" fill="#fffbe6" opacity="0.5"/>
                </svg>
                {/* Bubbles */}
                <div className="absolute left-8 top-0 w-2 h-2 bg-blue-200 rounded-full opacity-80 animate-bubble1" />
                <div className="absolute left-10 top-2 w-1.5 h-1.5 bg-blue-100 rounded-full opacity-70 animate-bubble2" />
                <div className="absolute left-6 top-4 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-bubble3" />
              </div>
            </div>

            {/* Floor (bottom) */}
            <div className="absolute left-0 bottom-0 w-full flex items-end justify-center z-20" style={{height: '120px'}}>
              {/* Floor SVG */}
              <svg width="100%" height="120" viewBox="0 0 600 120" preserveAspectRatio="none" className="absolute left-0 bottom-0 w-full h-full">
                <ellipse cx="300" cy="100" rx="280" ry="30" fill="#e0e7ef" />
                <ellipse cx="300" cy="110" rx="220" ry="18" fill="#cbd5e1" />
              </svg>
              {/* Sweeping Broom Animation */}
              <div className="absolute left-1/2 bottom-8 animate-sweep-floor" style={{width: '4.5rem', height: '4.5rem', marginLeft: '-2.25rem'}}>
                <svg viewBox="0 0 64 64" width="64" height="64">
                  <rect x="28" y="8" width="8" height="32" rx="4" fill="#bfa76a"/>
                  <rect x="24" y="40" width="16" height="8" rx="4" fill="#e2c275"/>
                  <ellipse cx="32" cy="52" rx="12" ry="6" fill="#f6e27a"/>
                  <ellipse cx="32" cy="54" rx="10" ry="4" fill="#e2c275"/>
                </svg>
              </div>
            </div>

            <div className="relative z-30 mt-8">
              <h2 className="text-3xl font-bold mb-4 animate-pulse">
                🧽 Cleaning & Preparing...
              </h2>
              <div className="w-64 bg-blue-200 rounded-full h-3 mx-auto">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: showSuccess ? '100%' : '0%' }}
                />
              </div>
              <p className="text-sm mt-2 opacity-80">Sanitizing the experience...</p>
            </div>
          </div>
        </div>
      )}

      {/* Success animation */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-60 pointer-events-none">
          <div className="text-center text-[#191c5d] animate-bounce">
            <div className="relative">
              {/* Sparkles for cleanliness */}
              <div className="absolute inset-0">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.cos(i * 22.5 * Math.PI / 180) * 150}px`,
                      top: `${Math.sin(i * 22.5 * Math.PI / 180) * 150}px`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  </div>
                ))}
              </div>
              
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold">✨ Spotlessly Clean!</h3>
            <p className="text-sm opacity-80 mt-2">Your NammaLoo experience is ready!</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`text-center max-w-md w-full transition-all duration-500 ${isLaunching ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Logo (static, no animation) */}
        <div className="mb-8 flex justify-center items-center mb-6" style={{height: '12rem'}}>
          <img 
            src={logo} 
            alt="NammaLoo Logo" 
            className="h-48 w-auto drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#191c5d] mb-4 animate-fade-in">
          Welcome to NammaLoo
        </h1>
        <p className="text-lg sm:text-xl text-[#497abd] mb-8 font-medium animate-fade-in-delay">
          Making clean, safe sanitation accessible to everyone, everywhere.
        </p>

        {/* Launch Button */}
        <button
          onClick={handleLaunch}
          disabled={isLaunching}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1aaf9b] to-[#497abd] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#1aaf9b]/90 hover:to-[#497abd]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
        >
          <span className="relative z-10">🧽 Launch App</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          
          {/* Button shine effect */}
          <div className="absolute inset-0 -top-full group-hover:top-full transition-all duration-1000 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
        </button>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 mt-6 animate-fade-in-delay-2">
        </p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out; }
          .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
          .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }

          /* Sweeping broom animation: left to right and back on floor */
          @keyframes sweep-floor {
            0% { left: 10%; transform: rotate(-15deg); }
            20% { left: 30%; transform: rotate(0deg); }
            50% { left: 70%; transform: rotate(10deg); }
            80% { left: 30%; transform: rotate(0deg); }
            100% { left: 10%; transform: rotate(-15deg); }
          }
          .animate-sweep-floor { animation: sweep-floor 2.5s cubic-bezier(0.4,0,0.2,1) infinite; }

          /* Scrubbing animation: circular motion on mirror */
          @keyframes scrub-mirror {
            0% { transform: translate(0,0) rotate(0deg); }
            20% { transform: translate(-18px, -12px) rotate(20deg); }
            40% { transform: translate(-28px, 8px) rotate(40deg); }
            60% { transform: translate(-14px, 24px) rotate(60deg); }
            80% { transform: translate(8px, 16px) rotate(40deg); }
            100% { transform: translate(0,0) rotate(0deg); }
          }
          .animate-scrub-mirror { animation: scrub-mirror 2s linear infinite; }

          /* Bubble animations */
          @keyframes bubble1 { 0% { opacity: 0.8; top: 0; } 100% { opacity: 0; top: -16px; } }
          @keyframes bubble2 { 0% { opacity: 0.7; top: 8px; } 100% { opacity: 0; top: -10px; } }
          @keyframes bubble3 { 0% { opacity: 0.6; top: 16px; } 100% { opacity: 0; top: 0px; } }
          .animate-bubble1 { animation: bubble1 1.5s linear infinite; }
          .animate-bubble2 { animation: bubble2 1.2s linear infinite 0.5s; }
          .animate-bubble3 { animation: bubble3 1.8s linear infinite 1s; }
        `
      }} />
    </div>
  );
};

export default LaunchPage;