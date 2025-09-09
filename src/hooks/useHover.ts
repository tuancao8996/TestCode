"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mouseenter", onEnter);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return [elementRef, isHovered] as const;
}

export default useHover;


