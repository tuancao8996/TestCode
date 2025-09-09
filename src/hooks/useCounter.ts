"use client";

import { useState } from "react";

export function useCounter(initial: number = 0, step: number = 1) {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(initial);
  const set = (value: number) => setCount(value);

  return { count, increment, decrement, reset, set } as const;
}

export default useCounter;


