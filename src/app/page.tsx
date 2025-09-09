"use client";

import Image from "next/image";
import UsePreviousDemo from "./components/UsePreviousDemo";
import UseDebounceDemo from "./components/UseDebounceDemo";
import UseCounterDemo from "./components/UseCounterDemo";
import UseHoverDemo from "./components/UseHoverDemo";
import UseToggleDemo from "./components/UseToggleDemo";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <UsePreviousDemo />
          <UseDebounceDemo />
          <UseCounterDemo />
          <UseHoverDemo />
          <UseToggleDemo />
        </div>
      </main>
      
    </div>
  );
}
