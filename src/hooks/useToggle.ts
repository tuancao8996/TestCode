"use client";

import { useCallback, useState } from "react";

export function useToggle(initial: boolean = false) {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback((next?: boolean) => {
    if (typeof next === "boolean") {
      setValue(next);
    } else {
      setValue((v) => !v);
    }
  }, []);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);

  return { value, toggle, on, off } as const;
}

export default useToggle;


