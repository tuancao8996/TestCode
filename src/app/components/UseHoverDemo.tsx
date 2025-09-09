"use client";

import useHover from "@/hooks/useHover";

export default function UseHoverDemo() {
  const [ref, isHovered] = useHover<HTMLDivElement>();

  return (
    <div className="w-full max-w-md rounded-xl border bg-white/70 dark:bg-black/20 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">useHover</h3>
        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">event</span>
      </div>
      <div
        ref={ref}
        className="h-24 rounded-md border grid place-items-center transition-colors"
        style={{ backgroundColor: isHovered ? "#dbeafe" : "#f9fafb" }}
      >
        {isHovered ? "Hovering" : "Hover me"}
      </div>
      <div className="text-sm">isHovered: {String(isHovered)}</div>
    </div>
  );
}


