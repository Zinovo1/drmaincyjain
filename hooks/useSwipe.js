"use client";

import { useCallback, useRef } from "react";

const DEFAULT_THRESHOLD = 48;

/**
 * Touch swipe handler for carousels. Ignores mostly-vertical gestures.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = DEFAULT_THRESHOLD }) {
  const startRef = useRef(null);

  const onTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    startRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchEnd = useCallback(
    (event) => {
      const start = startRef.current;
      startRef.current = null;
      if (!start) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;

      if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX < 0) onSwipeLeft?.();
      else onSwipeRight?.();
    },
    [onSwipeLeft, onSwipeRight, threshold]
  );

  return { onTouchStart, onTouchEnd };
}
