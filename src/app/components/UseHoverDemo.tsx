"use client";

import useHover from "@/hooks/useHover";

export default function UseHoverDemo() {
  const [ref, isHovered] = useHover<HTMLDivElement>();

  return (
     <div className="rounded-xl border bg-white dark:bg-zinc-900 p-5 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-500" />
          <h3 className="text-sm font-semibold text-violet-700 dark:text-violet-400">useHover</h3>
        </div>
        <span className="text-xs text-violet-600/70 dark:text-violet-300/70">Di chuột để xem trạng thái</span>
      </div>
      <div
        ref={ref}
        className="h-24 flex items-center justify-center rounded-lg border bg-violet-50 text-violet-800 dark:bg-violet-900/20 dark:text-violet-200"
      >
        <span className="text-sm">{isHovered ? "Đang hover" : "Chưa hover"}</span>
      </div>
    </div>
  )
}


