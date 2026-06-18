"use client";

import { createContext, useContext } from "react";

export type HeaderTone = "light" | "dark";

interface HeaderChromeValue {
  tone: HeaderTone;
  progress: number;
  scrolled: boolean;
  overlay: boolean;
}

const HeaderChromeContext = createContext<HeaderChromeValue>({
  tone: "dark",
  progress: 1,
  scrolled: true,
  overlay: false,
});

export function HeaderChromeProvider({
  value,
  children,
}: {
  value: HeaderChromeValue;
  children: React.ReactNode;
}) {
  return <HeaderChromeContext.Provider value={value}>{children}</HeaderChromeContext.Provider>;
}

export function useHeaderChrome() {
  return useContext(HeaderChromeContext);
}
