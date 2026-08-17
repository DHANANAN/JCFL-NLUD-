"use client";

import { useState, useRef, useCallback } from "react";

export function useButtonShake(thresholdClicks = 3, resetTimeMs = 900) {
  const [isShaking, setIsShaking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback(() => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= thresholdClicks) {
        setIsShaking(true);

        // Add earthquake body shake effect
        if (typeof document !== "undefined") {
          document.body.classList.add("earthquake-shake");
          setTimeout(() => {
            document.body.classList.remove("earthquake-shake");
          }, 600);
        }

        setTimeout(() => {
          setIsShaking(false);
        }, 600);

        return 0; // reset
      }
      return next;
    });

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setClickCount(0);
    }, resetTimeMs);
  }, [thresholdClicks, resetTimeMs]);

  return {
    isShaking,
    clickCount,
    handleClick,
  };
}
