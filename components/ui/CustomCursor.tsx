"use client";

import { useCustomCursor } from "@/hooks/useCustomCursor";

export function CustomCursor() {
  const { position, isHovered, isPointer, isClicked, ripples, isTouchDevice } =
    useCustomCursor();

  if (isTouchDevice || !isHovered) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Click Ripple Waves */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full border-2 border-[#B99A5E] pointer-events-none animate-ping opacity-75"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "48px",
            height: "48px",
            transform: "translate(-50%, -50%)",
            animationDuration: "0.65s",
          }}
        />
      ))}

      {/* Outer Follower Ring */}
      <div
        className="absolute rounded-full border border-[#B99A5E]/80 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? "46px" : "28px",
          height: isPointer ? "46px" : "28px",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : 1})`,
          backgroundColor: isPointer
            ? "rgba(185, 154, 94, 0.12)"
            : "rgba(22, 50, 79, 0.04)",
          backdropFilter: isPointer ? "blur(1px)" : "none",
        }}
      />

      {/* Center Pinpoint Dot */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? "6px" : "5px",
          height: isPointer ? "6px" : "5px",
          transform: "translate(-50%, -50%)",
          backgroundColor: isPointer ? "#16324F" : "#B99A5E",
          boxShadow: "0 0 6px rgba(185, 154, 94, 0.6)",
        }}
      />
    </div>
  );
}
