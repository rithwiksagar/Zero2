"use client";
import { createContext, useContext } from "react";
import { ModelSelectorContextType } from "./types";

export const ModelSelectorContext =
  createContext<ModelSelectorContextType | null>(null);

export function useModelSelector() {
  const Context = useContext(ModelSelectorContext);
  if (!Context) throw new Error("must be inside the selector");
  return Context;
}
