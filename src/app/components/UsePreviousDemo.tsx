"use client";

import { useEffect, useState } from "react";
import usePrevious from "@/hooks/usePrevious";

export default function UsePreviousDemo() {
  const [value, setValue] = useState<string>("");
  const previous = usePrevious(value);

  useEffect(() => {
    // force a state update to show previous after first change
  }, []);

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/70 dark:bg-black/20 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">usePrevious</h3>
        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">state</span>
      </div>
      <p className="text-xs text-gray-500">Lưu lại giá trị trước đó của một state hoặc prop.</p>
      <input
        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        placeholder="Nhập gì đó..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-sm grid grid-cols-2 gap-2">
        <div className="rounded-md bg-gray-50 dark:bg-white/5 p-2"><span className="font-medium">Current:</span> {value || "(empty)"}</div>
        <div className="rounded-md bg-gray-50 dark:bg-white/5 p-2"><span className="font-medium">Previous:</span> {previous ?? "(undefined)"}</div>
      </div>
    </div>
  );
}


