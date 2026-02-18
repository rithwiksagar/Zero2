"use client";
import { useState } from "react";
import { ModelSelectorContext } from "./ModelSelectorContext";
import { ModelSelectorProps } from "./types";

export default function ModelSelector({ children }: ModelSelectorProps) {
  const [open, setOpen] = useState(false);
  const [defaultModel, setDefaultModel] = useState("Claude 4 sonnet");
  const [search, setSearch] = useState("");
  return (
    <ModelSelectorContext.Provider
      value={{
        open,
        setOpen,
        defaultModel,
        setDefaultModel,
        search,
        setSearch,
      }}
    >
      {children}
    </ModelSelectorContext.Provider>
  );
}
