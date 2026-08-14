"use client";

import { ReactNode } from "react";
import { useButtonShake } from "@/hooks/useButtonShake";

interface ShakeButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
}

export function ShakeButton({
  children,
  onClick,
  className = "",
  title,
}: ShakeButtonProps) {
  const { isShaking, handleClick } = useButtonShake(3, 800);

  const handleCombinedClick = () => {
    handleClick();
    onClick?.();
  };

  return (
    <button
      onClick={handleCombinedClick}
      className={`${className} ${isShaking ? "earthquake-shake" : ""} transition-transform active:scale-95`}
      title={title}
    >
      {children}
    </button>
  );
}
