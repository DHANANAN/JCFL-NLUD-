"use client";

import { useState, useEffect } from "react";

export interface CursorPosition {
  x: number;
  y: number;
}

export interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function useCustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined") {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    let rippleCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("clickable");

        setIsPointer(Boolean(isClickable));
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple = {
        id: ++rippleCounter,
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-4), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return {
    position,
    isHovered,
    isPointer,
    isClicked,
    ripples,
    isTouchDevice,
  };
}
