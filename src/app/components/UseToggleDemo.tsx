"use client";

import useToggle from "@/hooks/useToggle";

export default function UseToggleDemo() {
  const { value, toggle, on, off } = useToggle(false);

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/70 dark:bg-black/20 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">useToggle</h3>
        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">state</span>
      </div>
      <div className="text-lg">State: <span className="font-mono">{String(value)}</span></div>
      <div className="flex gap-2 flex-wrap">
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={() => toggle()}>
          Toggle
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg:white/10" onClick={on}>
          On
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={off}>
          Off
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={() => toggle(true)}>
          Set true
        </button>
        <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10" onClick={() => toggle(false)}>
          Set false
        </button>
      </div>
    </div>
  );
}


