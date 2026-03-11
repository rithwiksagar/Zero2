"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface SidebarContextTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const SidebarContext = createContext<SidebarContextTypes | null>(null);
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
