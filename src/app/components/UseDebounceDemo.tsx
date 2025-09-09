"use client";

import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function UseDebounceDemo() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 600);

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/70 dark:bg-black/20 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">useDebounce</h3>
        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">timing</span>
      </div>
      <p className="text-xs text-gray-500">Trì hoãn cập nhật giá trị cho đến khi người dùng ngừng gõ.</p>
      <input
        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        placeholder="Gõ nhanh để thấy giá trị debounced"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-sm grid grid-cols-2 gap-2">
        <div className="rounded-md bg-gray-50 dark:bg-white/5 p-2"><span className="font-medium">Immediate:</span> {text || "(empty)"}</div>
        <div className="rounded-md bg-gray-50 dark:bg:white/5 p-2"><span className="font-medium">Debounced (600ms):</span> {debounced || "(empty)"}</div>
      </div>
    </div>
  );
}


