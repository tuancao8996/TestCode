"use client";

import useCounter from "@/hooks/useCounter";

export default function UseCounterDemo() {
  const { count, increment, decrement, reset, set } = useCounter(0, 1);

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/70 dark:bg-black/20 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">useCounter</h3>
        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">state</span>
      </div>
      <div className="text-3xl font-bold">{count}</div>
      <div className="flex gap-2 flex-wrap">
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={decrement}>
          -1
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={increment}>
          +1
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg:white/10" onClick={reset}>
          Reset
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={() => set(5)}>
          Set 5
        </button>
      </div>
      <p className="text-xs text-gray-500">Initial 0, Step 1</p>
    </div>
  );
}


