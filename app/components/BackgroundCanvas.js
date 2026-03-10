"use client";

import { useEffect, useRef } from "react";

// Layered background:
// - Base image (set via Tailwind utility using stars-background.jpg)
// - Soft overlay for readability
// - Occasional shooting stars rendered with absolutely positioned spans

const SHOOTING_STAR_INTERVAL_MIN = 5500; // ms
const SHOOTING_STAR_INTERVAL_MAX = 11000; // ms
const MAX_STARS = 2;

export default function BackgroundCanvas() {
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function scheduleNext() {
      const delay =
        Math.random() *
          (SHOOTING_STAR_INTERVAL_MAX - SHOOTING_STAR_INTERVAL_MIN) +
        SHOOTING_STAR_INTERVAL_MIN;
      timeoutRef.current = window.setTimeout(() => {
        createShootingStar();
        scheduleNext();
      }, delay);
    }

    function createShootingStar() {
      const container = containerRef.current;
      if (!container) return;
      if (starsRef.current.length >= MAX_STARS) return;

      const star = document.createElement("span");
      star.className =
        "pointer-events-none absolute h-[1px] w-28 sm:w-40 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-50";

      const topPercent = 4 + Math.random() * 18; // keep high in frame
      const leftPercent = -15 + Math.random() * 25;
      const duration = 900 + Math.random() * 600;

      star.style.top = `${topPercent}vh`;
      star.style.left = `${leftPercent}vw`;
      star.style.transform = "translate3d(0,0,0) rotate(15deg)";
      star.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.45))";
      star.style.transition = `transform ${duration}ms ease-out, opacity 400ms ease-out`;

      container.appendChild(star);
      starsRef.current.push(star);

      // Trigger animation on next frame
      requestAnimationFrame(() => {
        star.style.transform =
          "translate3d(42vw, -16vh, 0) rotate(16deg)";
        star.style.opacity = "0";
      });

      window.setTimeout(() => {
        star.remove();
        starsRef.current = starsRef.current.filter((s) => s !== star);
      }, duration + 500);
    }

    scheduleNext();

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      starsRef.current.forEach((s) => s.remove());
      starsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 -z-20 overflow-hidden bg-black"
    >
      {/*
        BACKGROUND IMAGE
        Using your uploaded stars background at /public/images/stars-background.png
      */}
      <div className="absolute inset-0 bg-[url('/images/stars-background.png')] bg-cover bg-center" />
      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95" />
      {/* Soft radial glow near top for cinematic feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-soft opacity-70 mix-blend-screen" />
    </div>
  );
}

