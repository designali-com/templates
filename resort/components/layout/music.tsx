"use client";

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";

interface MusicPlayerProps {
  audioSrc?: string;
  initialVolume?: number;
}

export interface MusicPlayerRef {
  playMusic: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(({
  audioSrc = "/music.wav",
  initialVolume = 0.3,
}, ref) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume;
    }
  }, [initialVolume]);

  const playMusic = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    playMusic,
  }));

  const toggleAudio = async (): Promise<void> => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback error:", err);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[10000]">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute Sound" : "Play Sound"}
        className="
          group flex items-center gap-3 px-5 py-2.5 rounded-full 
          bg-black/10 hover:bg-black/20 backdrop-blur-lg 
          text-white text-xs tracking-widest uppercase font-medium 
          border border-white/20 hover:border-white/40
          shadow-xl hover:scale-105 transition-all duration-300
          cursor-pointer select-none
        "
      >
        {/* Visualizer Equalizer */}
        <div className="flex items-end justify-center gap-[3px] h-3.5 w-4">
          <span
            className={`w-[2px] bg-white rounded-full transition-all duration-300 ${
              isPlaying ? "h-3.5 animate-bounce" : "h-1"
            }`}
          />
          <span
            className={`w-[2px] bg-white rounded-full transition-all duration-300 ${
              isPlaying ? "h-2.5 animate-bounce [animation-delay:0.15s]" : "h-2"
            }`}
          />
          <span
            className={`w-[2px] bg-white rounded-full transition-all duration-300 ${
              isPlaying ? "h-3.5 animate-bounce [animation-delay:0.3s]" : "h-1"
            }`}
          />
        </div>

        {/* Text */}
        <span className="min-w-[30px] text-left transition-colors duration-300">
          {isPlaying ? "  ON" : "  OFF"}
        </span>
      </button>
    </div>
  );
});

MusicPlayer.displayName = "MusicPlayer";